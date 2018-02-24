<template>
	<div>
		<button class="btn btn-primary" @click="submit()">确定登出</button>
		<p class="alert alert-warning signout" v-if="isPrompt">{{prompt}}</p>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			isPrompt: false,
			prompt: ''
		}
	},
	methods: {
		submit() {
			axios.get('api/signout').then(res => {
				this.isPrompt = true;
				this.prompt = res.data.information;
			});
		}
	}
}
</script>