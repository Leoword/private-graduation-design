<template>
	<div id="recommend">
		<div class="recommend"  v-if="isShow">
			<h1>猜你喜欢</h1>
			<div class="cardBar">
				<div class="card" v-for="(production,index) in productionList"
				:key="index" @click="jump(production)">
					<img class="card-img-top"
					:src="url + production.image"
					alt="未上传图片">
					<div class="card-body">
						<p class="card-text">{{production.productionName}}</p>
						<p class="card-text">
							<span>{{production.type}}</span>
							<span>{{production.price}}元</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<nav>
			<ul class="pagination">
				<li class="page-item"
				v-for="(item, index) in container"
				:key="index">
					<span class="page-link" href="#"
					@click="number = index;changePage()">{{index+1}}</span>
				</li>
			</ul>
		</nav>
		<h1 v-if="productionList === null">{{tip}}</h1>
	</div>
</template>

<script>
import axios from 'axios';
import {pagenator} from '../../mixin';

export default {
	data() {
		return {
			productionList: null,
			tip: '',
			isPrompt: false,
			prompt: '',
			container: [],
			number: 0,
			isShow: true,
			url: 'http://localhost:4000/'
		}
	},
	beforeCreate() {
		return axios.get('api/personal/tourist/recommend').then((res) => {
			console.log(res.data);
			if (!res.data.information) {
				const {container, note} = pagenator(4, res.data, this.container, this.productionList);

				this.container = container;
				this.productionList = note;
			} else {
				this.isShow = false;
				this.tip = res.data.information;
			}
		});
	},
	methods: {
		changePage() {
			this.productionList = this.container[this.number];
		},
		jump(item) {
			this.$router.push({
				path: '/production/detail',
				query: {
					production: item
				}
			});
		}
	}
}
</script>

<style>
#recommend .recommend{
	width:100%;
	padding:40px 5%;
}
#recommend .recommend .p{
	text-align: center;
	font-size: 40px;
	font-weight: bold;
	margin-top: 20px;
}
#recommend .recommend .btn {
	margin: 0 auto;
	display: block;
}
#recommend .recommend .cardBar {
	height:400px;
}
#recommend h1{
	color:rgb(122,122,122);
	margin-bottom:30px;
}
#recommend .card{
	width:250px;
	height:350px;
	margin:1%;
	float: left;
}
#recommend .recommend .card img{
	width:100%;
	height:200px;
	background-color: gray;
}
</style>
