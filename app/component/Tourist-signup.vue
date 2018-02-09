<template>
	<div class="box-container"> 
		<div class="container text-center signUp">
			<div class="row">
				<div class="col-sm">
					<h2>游客注册</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					用户名:
				</div>
				<div class="col-sm">
					<input type="text" v-model="user.username" @focus="hidden()" required>
					<span>输入5到16位的小写字母、大写字母、数字、下划线、连接符混合</span>
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					密码：
				</div>
				<div class="col-sm">
					<input type="text" v-model="user.password" @focus="hidden()" required>
					<span>输入10到16位的小写字母、大写字母、数字、下划线、连接符混合</span>
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					邮箱：
				</div>
				<div class="col-sm">
					<input type="text" v-model="user.email" @focus="hidden()" required>
					<span>输入符合要求的邮箱地址</span>
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					地址：
				</div>
				<div class="col-sm">
					<input type="text" v-model="user.address" @focus="hidden()" required>
					<span>输入具体的居住地址（可选）</span>
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					<input type="submit" @click="assignUser(user)">
				</div>
				<div class="col-sm">
					<input type="reset" @click="cancelInput(user)">
				</div>
			</div>
			<div class="row">
				<p class="alert alert-primary" v-if="isPromptShow">{{prompt}},返回<router-link 
				tag="a" to="/signin">登录页面</router-link>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import signin from './Signin.vue';
import {
	USERNAME,
	PASSWORD,
	EMAIL,
	validate
} from '../mixin';

export default {
	name: "tourist-signup",
	data() {
		return {
			user: {
				username: '',
				password: '',
				email: '',
				address: ''
			},
			prompt: '',
			isPromptShow: false
		}
	},
	methods: {
		assignUser(user) {
			if (user.username === '' || user.password === '' || user.email === '') {
				this.isPromptShow = true;
				this.prompt = '你必须输入用户名，密码和邮箱！';
	
				return;
			}

			if (!validate(user.username, USERNAME)) {
				this.isPromptShow = true;
				this.prompt = '请输入符合格式的用户名！';
	
				return;
			}

			if (!validate(user.password, PASSWORD)) {
				this.isPromptShow = true;
				this.prompt = '请输入符合格式的密码！';
	
				return;
			}

			if (!validate(user.email, EMAIL)) {
				this.isPromptShow = true;
				this.prompt = '请输入符合格式的邮箱！';
	
				return;
			}

			return axios.post('/api/signup/tourist', user).then(res => {
				this.isPromptShow = true;
				this.prompt = res.data.information;
			});
		},
		cancelInput(user) {
			user.username = '';
			user.password = '';
			user.email = '';
			user.address = '';
		},
		hidden() {
			this.isPromptShow = false;
		}
	}
}
</script>

<style>

</style>