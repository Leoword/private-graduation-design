<template>
	<div id="production">
		<div class="container">
			<nav-self></nav-self>
			<div class="input-group">
				<select class="custom-select" id="inputGroupSelect04" v-model="type.typeValue">
					<option value="" selected>选择感兴趣的商品类型</option>
					<option value="观光旅游">观光旅游</option>
					<option value="文娱消遣旅游">文娱消遣旅游</option>
					<option value="公务旅游">公务旅游</option>
					<option value="个人及家庭事务旅游">个人及家庭事务旅游</option>
					<option value="保健旅游">保健旅游</option>
					<option value="文化类旅游">文化类旅游</option>
					<option value="生态/探险旅游">生态/探险旅游</option>
				</select>
				<div class="input-group-append">
					<button class="btn btn-success" type="button" @click="google()">搜索</button>
				</div>
			</div>
			<div class="recommend">
				<h1 class="text-center">全部商品</h1>
				<div class="cardBar" v-if="isShow">
					<div class="card" v-for="(item,index) in production"
					:key="index" @click="jump(item)">
						<img class="card-img-top"
						:src="url + item.image"
						alt="未上传图片">
						<div class="card-body">
							<p class="card-text">{{item.productionName}}</p>
							<p class="card-text">
								<span>{{item.type}}</span>
								<span>{{item.price}}元</span>
							</p>
						</div>
					</div>
				</div>
				<nav v-if="isNav">
					<ul class="pagination">
						<li class="page-item"
						v-for="(item, index) in container"
						:key="index">
							<span class="page-link" href="#"
							@click="number = index;changePage()">{{index+1}}</span>
						</li>
					</ul>
				</nav>
				<p class="p" v-if="!isShow">没有合适的商品存在</p>
			</div>
		</div>
	</div>
</template>

<script>
import NavSelf from './component/nav.vue';
import axios from 'axios';
import {pagenator} from './mixin';

export default {
	data() {
		return {
			production: null,
			url: 'http://localhost:4000/',
			isShow: true,
			isNav: true,
			type: {
				typeValue: ''
			},
			container: [],
			number: 0
		};
	},
	beforeCreate() {
		axios.get('api/main/production').then(res => {
			
			if (res.data.length !== 0) {
				const {container, note} = pagenator(8, res.data, this.container, this.production);

				this.container = container;
				this.production = note;
			} else {
				this.isShow = false;
			}
		});
	},
	methods: {
		google() {
			return axios.post('api/main/production', this.type).then(res => {
				
				if (res.data.lenght !== 0 || res.data.lenght !== undefined) {
					this.production = res.data;
					this.isNav = false;
				} else {
					this.isShow = false;
				}
			});
		},
		changePage() {
			this.production = this.container[this.number];
		},
		jump(item) {
			this.$router.push({
				path: '/production/detail',
				query: {
					production: item
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
#production .container {
	margin:0;
	padding:0;
	width:100%;
	min-width:1349px;
}
#production .input-group {
	width:40%;
	margin:30px auto;
}
#production .input-group input{
	border-color: green;
}
#production .recommend{
	width:100%;
	padding:40px 5%;
}
#production .recommend .p{
	text-align: center;
	font-size: 40px;
	font-weight: bold;
	margin-top: 20px;
}
#production .recommend .btn {
	margin: 0 auto;
	display: block;
}
#production .recommend .cardBar {
	height:600px;
}
#production h1{
	color:rgb(122,122,122);
	margin-bottom:30px;
}
#production .card{
	width:23%;
	margin:1%;
	float: left;
}
#production .recommend .card img{
	width:100%;
	height:200px;
	background-color: gray;
}
</style>

