<template>
	<div class="text-center signup">
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
				</div>
			</div>
			<div class="row">
				<div class="col-sm-3"></div>
				<div class="col-sm-3">
					<button class="btn btn-outline-primary" @click="assignUser(user)">提交</button>
				</div>
				<div class="col-sm-3">
					<button type="reset" class="btn btn-outline-primary">重置</button>
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
import {
	USERNAME,
	PASSWORD,
	EMAIL,
	ID,
	REALNAME,
	ADDRESS,
	validate
} from '../../mixin';

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
		hidden() {
			this.isPromptShow = false;
		}
	}
}
</script>


