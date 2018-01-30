<template>
	<div class="box-container"> 
		<div class="container text-center signUp">
			<div class="row">
				<div class="col-sm">
					<h2>商户注册</h2>
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
					真实姓名：
				</div>
				<div class="col-sm">
					<input type="text" v-model="user.realname" @focus="hidden()" required>
					<span>输入真实姓名以便审核</span>
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					身份证号：
				</div>
				<div class="col-sm">
					<input type="text" v-model="user.id" @focus="hidden()" required>
					<span>输入18位身份证号</span>
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					地址：
				</div>
				<div class="col-sm">
					<input type="text" v-model="user.address" @focus="hidden()" required>
					<span>输入具体的居住地址</span>
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
	ID,
	REALNAME,
	ADDRESS,
	validate
} from './mixin';

export default {
	name: "business-signup",
	data() {
		return {
			user: {
				username: '',
				password: '',
				realname: '',
				id: '',
				email: '',
				address: ''
			},
			prompt: '',
			isPromptShow: false
		}
	},
	methods: {
		assignUser(user) {
			if (user.username === '' || user.password === '' || user.email === '' || user.realname === '' || user.id === '' || user.address === '') {
				this.isPromptShow = true;
				this.prompt = '你必须输入以上所有的内容！';
	
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

			if (!validate(user.realname, REALNAME)) {
				this.isPromptShow = true;
				this.prompt = '请输入真实姓名！';
	
				return;
			}

			if (!validate(user.id, ID)) {
				this.isPromptShow = true;
				this.prompt = '请输入符合格式的身份证号！';
	
				return;
			}


			if (!validate(user.address, ADDRESS)) {
				this.isPromptShow = true;
				this.prompt = '请输入真实地址！';
	
				return;
			}
			
			if (!validate(user.email, EMAIL)) {
				this.isPromptShow = true;
				this.prompt = '请输入符合格式的邮箱！';
	
				return;
			}

			return axios.post('/api/signup/business', user).then(res => {
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
