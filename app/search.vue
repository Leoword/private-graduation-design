<template>
	<div id="search">
		<div class="coantainer">
			<nav-self></nav-self>
			<div class="recommend">
				<h1 class="text-center">相关搜索结果</h1>
				<div class="cardBar" v-if="isShow || elseShow">
					<div class="card" v-for="(item,index) in production"
					:key="index" @click="jumpProduction(item)">
						<img class="card-img-top"
						:src="url + item.image"
						alt="未上传图片">
						<div class="card-body">
							<p class="card-text">{{item.productionName}}</p>
							<p class="card-text">
								<span>{{item.type}}</span>
								<span>商品类</span>
								<span>{{item.price}}元</span>
							</p>
						</div>
					</div>
					<div class="card" v-for="(item,index) in note"
					:key="index" @click="jumpNote(item)">
						<img class="card-img-top"
						:src="url + image"
						alt="未上传图片">
						<div class="card-body">
							<p class="card-text">{{item.title}}</p>
							<p class="card-text">
								<span>{{item.type}}</span>
								<span>游记类</span>
							</p>
						</div>
					</div>
					<div class="card" v-for="(item,index) in artical"
					:key="index" @click="jumpNote(item)">
						<img class="card-img-top"
						:src="url + image"
						alt="未上传图片">
						<div class="card-body">
							<p class="card-text">{{item.title}}</p>
							<p class="card-text">
								<span>{{item.type}}</span>
								<span>文章类</span>
							</p>
						</div>
					</div>
				</div>
				<p class="p" v-if="!isShow && !elseShow">你查询的内容不存在！</p>
			</div>
		</div>
	</div>
</template>
<script>
import NavSelf from './component/nav.vue';
import axios from 'axios';

export default {
	data() {
		return {
			production: null,
			note: null,
			artical: null,
			url: 'http://localhost:4000/',
			image: '1.jpg',
			isShow: true,
			elseShow: true
		};
	},
	beforeCreate() {
		const parameter = this.$route.query;

		axios.post('api/search/production', parameter).then(res => {
			if (res.data.length !== 0) {
				this.production = res.data;
			} else {
				this.isShow = false;
			}
		});

		axios.post('api/search/note', parameter).then(res => {
			if (res.data.length !== 0) {
				this.note = res.data;
			} else {
				this.elseShow = false;
			}
		});

		axios.post('api/search/artical', parameter).then(res => {
			if (res.data.length !== 0) {
				this.artical = res.data;
			} else {
				this.elseShow = false;
			}
		});
	},
	methods: {
		jumpProduction(item) {
			this.$router.push({
				path: '/production/detail',
				query: {
					production: item
				}
			});
		},
		jumpNote(item) {
			this.$router.push({
				path: '/note/detail',
				query: {
					note: item
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
#search .container {
	margin:0;
	padding:0;
	width:100%;
	min-width:1349px;
}
#search .recommend{
	width:100%;
	margin-top:60px;
	padding:0 40px;
}
#search .recommend .p{
	text-align: center;
	font-size: 40px;
	font-weight: bold;
	margin-top: 20px;
}
#search .recommend .cardBar {
	height:600px;
}
#search h1{
	color:rgb(122,122,122);
	margin-bottom:30px;
}
#search .card{
	width:23%;
	margin:1%;
	float: left;
}
#search .recommend .card img{
	width:100%;
	height:200px;
	background-color: gray;
}
</style>

