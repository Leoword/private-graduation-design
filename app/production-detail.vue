<template>
	<div>
		<nav-self></nav-self>
		<div class="content">
			<div class="top">
				<div class="left">
					<img :src="url + production.image"/>
				</div>
				<div class="right">
					<h1>{{production.productionName}}</h1>
					<h3 class="left">价格：{{production.price}}元</h3>
					<h3 class="left">目的地：{{production.destination}}</h3>
					<h3>商家：{{production.businessName}}</h3>
					<h3>商品类型：{{production.type}}</h3>
					<p>商品描述：{{production.describe}}</p>
					<p>发布时间：{{production.createdAt}}</p>
				</div>
			</div>
			<div class="bottom row">
				<div class="col-sm-4"></div>
				<button class="btn btn-lg btn-outline-primary"
				@click="collect(production)">收 藏</button>
				<div class="col-sm-1"></div>
				<button class="btn btn-lg btn-outline-primary"
				@click="order(production)">下订单</button>
				<div class="col-sm-3"></div>
			</div>
			<p class="alert alert-danger" v-if="isPrompt">{{prompt}}</p>
		</div>
	</div>

</template>

<script>
import NavSelf from './component/nav.vue';
import axios from 'axios';

export default {
	data() {
		return {
			production: this.$route.query.production,
			url: 'http://localhost:4000/',
			isPrompt: false,
			prompt: ''
		};
	},
	methods: {
		collect() {
			return axios.post('api/production/collect',this.production).then(res => {
				if (res.data.information) {
					this.isPrompt = true;
					this.prompt = res.data.information;
				}
			});
		},
		order() {
			return axios.post('api/production/order',this.production).then(res => {
				if (res.data.information) {
					this.isPrompt = true;
					this.prompt = res.data.information;
				}
			});
		}
	},
	components: {
		NavSelf
	}
}
</script>
<style>
.content {
	width:100%;
	min-width: 1349px;
	padding: 60px;
}
.content .bottom {
	padding:50px;
}
.content .top {
	height: 450px;
}
.content .left {
	width:45%;
	float: left;
}
.content .left img{
	width:100%;
	height:auto;
}
.content .right {
	width:45%;
	float: right;
}
.content .right h3{
	margin:5px 10px;
}
.content .right p{
	margin:5px 10px;
	font-size: 20px;
}
</style>
