<template>
	<div class="card text-center" id="signIn">
			<h2 class="card-header">登录</h2>
			<div class="form-group row">
				<label class="col-sm-4 col-form-label">
					用户名:
				</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" v-model="user.username" @focus="hidden()" required>
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-4 col-form-label">
					密码：
				</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" v-model="user.password" @focus="hidden()" required>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-3"></div>
				<div class="col-sm-3">
					<button class="btn btn-outline-primary" @click="userSignIn(user)">登录</button>
				</div>
				<div class="col-sm-1"></div>
				<div class="col-sm-3">
					<router-link tag="button" class="btn btn-outline-primary" :to="`/signin/${type}`">注册</router-link>
					<p>{{type}}</p>
				</div>
			</div>
			<div class="row">
				<p class="alert alert-info" v-if="isPromptShow">{{prompt}}</p>
			</div>
		</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'sign-in',
	props: ['type'],
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
							this.$router.push('business');

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

#signIn .row {
	margin:20px;
}
#signIn p{
	width:100%;
	text-align: center;
}
</style>