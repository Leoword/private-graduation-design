<template>
	<div class="text-center" id="signIn">
		<div class="form-group">
			<div class="row">
				<label class="col-sm-4 col-form-label">
					用户名:
				</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" v-model="user.username" @focus="hidden()" required>
				</div>
			</div>
			<div class="row">
				<label class="col-sm-4 col-form-label">
					密码：
				</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" v-model="user.password" @focus="hidden()" required>
				</div>
			</div>
		</div>
		<div class="custom-control custom-radio custom-control-inline">
			<input type="radio" name="identify" value="tourist" v-model="user.type" id="tourist" class="custom-control-input">
			<label class="custom-control-label" for="tourist">游客</label>
		</div>
		<div class="custom-control custom-radio custom-control-inline">
			<input type="radio" name="identify" value="business" v-model="user.type" id="business" class="custom-control-input">
			<label class="custom-control-label" for="business">商家</label>
		</div>
		<div class="custom-control custom-radio custom-control-inline">
			<input type="radio" name="identify" value="administator" v-model="user.type" id="administator" class="custom-control-input">
			<label class="custom-control-label" for="administator">管理员</label>
		</div>
		<div class="row">
			<div class="col-sm-3"></div>
			<div class="col-sm-3">
				<button class="btn btn-outline-primary" @click="userSignIn(user)">登录</button>
			</div>
			<div class="col-sm-3">
				<button class="btn btn-outline-primary" type="reset">重置</button>
			</div>
			<div class="col-sm-3"></div>
		</div>
		<div class="row">
			<p class="alert alert-warning" v-if="isPromptShow">{{prompt}}</p>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'sign-in',
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
							this.$router.push('personalPage/tourist');

							break;
						case 'business':
							this.$router.push('personalPage/business');

							break;
						case 'administrator':
							this.$router.push('personalPage/administrator');

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