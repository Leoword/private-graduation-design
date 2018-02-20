<template>
	<form>
		<div class="form-group row">
			<label for="email" class="col-sm-2 col-form-label label">
				邮箱：
			</label>
			<div class="col-sm-6 input">
				<input type="email" id="email" class="form-control"
				required placeholder="必须填写" v-model="user.email"
				@focus="hidden()">
			</div>
		</div>
		<div class="form-group row">
			<label for="address" class="col-sm-2 col-form-label label">
				地址：
			</label>
			<div class="col-sm-6 input">
				<input type="address" id="address" class="form-control"
				required placeholder="必须填写" v-model="user.address"
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
	EMAIL,
	ADDRESS,
	validate
} from '../../mixin';

export default {
	data() {
		return {
			user: {
				email: '',
				address: ''
			},
			isPrompt: false,
			prompt: ''
		};
	},
	methods: {
		submit(user) {

			if (!validate(user.email, EMAIL)) {
				this.isPrompt = true;
				this.prompt = '填写正确格式的邮箱！';

				return;
			}

			if (!validate(user.address, ADDRESS)) {
				this.isPrompt = true;
				this.prompt = '填写真实的地址！';

				return;
			}

			axios.put('api/personal/business/update', user).then(res => {
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