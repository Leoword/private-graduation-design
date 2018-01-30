<template>
	<div class="box-container"> 
		<div class="container text-center" id="signIn">
			<div class="row">
				<div class="col-sm">
					<h2>登录</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					用户名:
				</div>
				<div class="col-sm">
					<input type="text" v-model="user.username" @focus="hidden()" required>
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					密码：
				</div>
				<div class="col-sm">
					<input type="text" v-model="user.password" @focus="hidden()" required>
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					<input type="radio" name="identify" value="tourist" v-model="user.type">游客
				</div>
				<div class="col-sm">
					<input type="radio" name="identify" value="business" v-model="user.type">商家
				</div>
				<div class="col-sm">
					<input type="radio" name="identify" value="administrator" v-model="user.type">管理员
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					<input type="submit" @click="userSignIn(user)" value="登录">
				</div>
				<div class="col-sm">
					<router-link tag="input" type="button" value="注册" to="/signup"></router-link>
				</div>
			</div>
			<div class="row">
				<p class="alert alert-primary" v-if="isPromptShow">{{prompt}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'signin',
	data() {
		return {
			user: {
				username: '',
				password:'',
				type: 'tourist'
			},
			prompt: '',
			isPromptShow: false
		}
	},
	methods: {
		userSignIn(user) {
			
			if (user.username === '' || user.password === '') {
				this.isPromptShow = true;
				this.prompt = '你必须输入用户名和密码';
	
				return;
			}

			return axios.post('/api/signin', user).then(res => {
				this.isPromptShow = true;

				if (res.data.isJump) {
					switch (res.data.type) {
						case 'tourist':
							this.$router.push('tourist');

							break;
						case 'business':
							this.$router.push('commercial');

							break;
						case 'administrator':
							this.$router.push('administrator');

							break;
						default:
						
							break;
					}
					
				}
				this.prompt = res.data.information;
			});
		},
		hidden() {
			this.isPromptShow = false;
		}
		
	}
}
</script>

<style>
body{
	background: gray;
}
#signIn {
	width:500px;
	background:lightgray;
	margin-top:100px;
	padding:20px;
}
#signIn .row {
	margin:20px;
	font-size:20px;
}
#signIn p{
	width:100%;
	text-align: center;
}
</style>