<template>
	<form>
		<div class="form-group row">
			<label for="old" class="col-sm-2 col-form-label label">
				原密码：
			</label>
			<div class="col-sm-6 input">
				<input type="password" id="old" class="form-control"
				required placeholder="必须填写" v-model="user.old"
				@focus="hidden()">
			</div>
		</div>
		<div class="form-group row">
			<label for="new" class="col-sm-2 col-form-label label">
				新密码：
			</label>
			<div class="col-sm-6 input">
				<input type="password" id="new" class="form-control"
				required placeholder="必须填写" v-model="user.password"
				@focus="hidden()">
			</div>
		</div>
		<div class="form-group row">
			<div class="col-sm-3"></div>
			<button type="submit" class="col-sm-1 btn btn-primary" @click="submit(user)">提交</button>
			<div class="col-sm-1"></div>
			<button type="reset" class="col-sm-1 btn btn-primary">重置</button>
		</div>
		<p class="alert alert-warning" v-if="isPrompt">{{prompt}}</p>
	</form>
</template>

<script>
import axios from 'axios';
import {
	PASSWORD,
	validate
} from '../../mixin';

export default {
	data() {
		return {
			user: {
				old: '',
				password: ''
			},
			isPrompt: false,
			prompt: ''
		};
	},
	methods: {
		submit(user) {

			if (!validate(user.old, PASSWORD) || !validate(user.password, PASSWORD)) {
				this.isPrompt = true;
				this.prompt = '填写正确格式的密码！';

				return;
			}

			axios.put('api/personal/tourist/password', user).then(res => {
				this.isPrompt = true;
				this.prompt = res.data.information;
			});
		},
		hidden() {
			this.isPrompt = false;
		}
	}
}
</script>