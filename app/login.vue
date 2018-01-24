<template>
	<div>
		<h1>login</h1>
		<span>用户名：</span><input type="text" v-model="user.username">
		<span>密码：</span><input type="text" v-model="user.password">
		<button type="submit" @click="postUserInformation(user.username, user.password)">登陆</button>
		<button @click="assignUser(user.username, user.password)">注册</button>
		<h2>{{response}}</h2>
		<p>{{isAllowedAssign}}</p>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'login',
	data() {
		return {
			user: {
				username: '',
				password:''
			},
			response: '',
			isAllowedAssign: ''
		}
	},
	methods: {
		postUserInformation(username, password) {
			return axios.post('/api/signIn', {
				username: username,
				password: password
			}).then(res => {
				this.response = res.data.information;
			});
		},
		assignUser(username, password) {
			return axios.post('/api/signUp', {
				username: username,
				password: password
			}).then(res => {
				this.isAllowedAssign = res.data.information;
			});
		}
	}
}
</script>