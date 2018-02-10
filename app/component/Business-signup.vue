<template>
	<div class="text-center" id="business">
		<div class="form-group">
			<div class="row">
				<label class="col-sm-3 col-form-label">
					用户名:
				</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" v-model="user.username" @focus="hidden()" required>
					<span>输入5到16位的小写字母、大写字母、数字、下划线、连接符混合</span>
				</div>
			</div>
			<div class="row">
				<label class="col-sm-3 col-form-label">
					密码：
				</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" v-model="user.password"  @focus="hidden()" required>
					<span>输入10到16位的小写字母、大写字母、数字、下划线、连接符混合</span>
				</div>
			</div>
			<div class="row">
				<label class="col-sm-3 col-form-label">
					真实姓名：
				</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" v-model="user.realname"  @focus="hidden()" required>
					<span>输入真实姓名以便审核</span>
				</div>
			</div>
			<div class="row">
				<label class="col-sm-3 col-form-label">
					身份证号：
				</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" v-model="user.id"  @focus="hidden()" required>
					<span>输入18位身份证号</span>
				</div>
			</div>
			<div class="row">
				<label class="col-sm-3 col-form-label">
					地址：
				</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" v-model="user.address"  @focus="hidden()" required>
					<span>输入具体的居住地址</span>
				</div>
			</div>
			<div class="row">
				<label class="col-sm-3 col-form-label">
					邮箱：
				</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" v-model="user.email"  @focus="hidden()" required>
					<span>输入符合要求的邮箱地址</span>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-3"></div>
				<div class="col-sm-3">
					<button class="btn btn-outline-primary" @click="assignUser(user)">提交</button>
				</div>
				<div class="col-sm-3">
					<button class="btn btn-outline-primary" @click="cancelInput(user)">重置</button>
				</div>
				<div class="col-sm-3"></div>
				
			</div>
			<div class="row">
				<p class="alert alert-warning" v-if="isPromptShow">{{prompt}}</p>
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
} from '../mixin';

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
#business .row{
	margin:0;
}
#business .row button {
	margin:10px auto;
}
#business .row span {
	font-size: 15px;
	line-height: 50%;
	text-align: left;
}
#business p{
	width:100%;
	padding-bottom: 10px;
	text-align: center;
}
#business .alert{
	padding:5px;
}
</style>

