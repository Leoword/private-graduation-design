<template>
	<div id="mainPage">
		<div class="container">
			<nav-self></nav-self>
			<div class="input-group">
				<input type="text" class="form-control" placeholder="请输入目的地/类型关键词等"
				v-model="information">
				<div class="input-group-append">
					<button class="btn btn-success" type="button" @click="google()">搜索</button>
				</div>
			</div>
			<div class="recommend large">
				<h1 class="text-center">今日推荐</h1>
				<div class="cardBar">
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
						<div class="card-footer">
							<small class="text-muted">Last updated</small>
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
						<div class="card-footer">
							<small class="text-muted">Last updated</small>
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
						<div class="card-footer">
							<small class="text-muted">Last updated</small>
						</div>
					</div>
				</div>
			</div>
			<div class="recommend shopping">
				<h1 class="text-center">商城精品</h1>
				<div class="cardSmall">
					<div class="card" v-for="(item,index) in moreProduction"
					:key="index" @click="jumpProduction(item)">
						<img class="card-img-top"
						:src="url + item.image"
						alt="图片未上传">
						<div class="card-body">
							<h5 class="card-title">{{item.productionName}}</h5>
							<p class="card-text">
								<span>{{item.type}}</span>
							</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated</small>
						</div>
					</div>
				</div>
				<router-link tag="button" class="btn btn-lg btn-secondary" to="/production">查看更多商品</router-link>
			</div>
			<div class="recommend">
				<h1 class="text-center">热门游记和话题</h1>
				<div class="cardSmall">
					<div class="card" v-for="(item,index) in moreNote"
					:key="index" @click="jumpNote(item)">
						<img class="card-img-top"
						:src="url + image"
						alt="未上传图片">
						<div class="card-body">
							<p class="card-text">{{item.title}}</p>
							<p class="card-text">
								<span>{{item.type}}</span>
							</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated</small>
						</div>
					</div>
				</div>
				<router-link tag="button" class="btn btn-lg btn-secondary" to="/note">查看更多游记</router-link>
			</div>
			<div class="recommend shopping">
				<h1 class="text-center">最新文章推荐</h1>
				<div class="cardSmall">
					<div class="card" v-for="(item,index) in moreArtical"
					:key="index" @click="jumpNote(item)">
						<img class="card-img-top"
						:src="url + image"
						alt="未上传图片">
						<div class="card-body">
							<p class="card-text">{{item.title}}</p>
							<p class="card-text">
								<span>{{item.type}}</span>
							</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated</small>
						</div>
					</div>
				</div>
				<router-link tag="button" class="btn btn-lg btn-secondary" to="/artical">查看更多文章</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import NavSelf from './component/nav.vue';

export default {
	data() {
		return {
			production: [],
			moreProduction: [],
			note: [],
			moreNote: [],
			artical: [],
			moreArtical: [],
			url: 'http://localhost:4000/',
			image: '1.jpg',
			information: ''
		};
	},
	beforeCreate() {
		axios.get('api/main/production').then(res => {
			const number = this.count(res.data);

			for (let i = number - 4;i < number;i++) {
				this.production.push(res.data[i]);
			}

			for (let i = number - 8;i < number - 4;i++) {
				this.moreProduction.push(res.data[i]);
			}
		});

		axios.get('api/main/note').then(res => {
			const number = this.count(res.data);

			for (let i = number - 4;i < number;i++) {
				this.note.push(res.data[i]);
			}

			for (let i = number - 8;i < number - 4;i++) {
				this.moreNote.push(res.data[i]);
			}
		});

		axios.get('api/main/artical').then(res => {
			const number = this.count(res.data);

			for (let i = number - 4;i < number;i++) {
				this.artical.push(res.data[i]);
			}

			for (let i  = number - 8;i < number - 4;i++) {
				this.moreArtical.push(res.data[i]);
			}
		});

	},
	methods: {
		google() {
			if (this.information !== '') {
				this.$router.push({
					path: '/search',
					query: {
						search: this.information
					}
				});
			}
		},
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
		},
		count(array) {
			let number = 0;

			array.forEach(item => {
				number++;
			});

			return number;
		}
	},
	components: {
		NavSelf
	}
}
</script>
<style>
#mainPage{
	line-height: 100%;
}
#mainPage .input-group {
	width:40%;
	margin:30px auto;
}
#mainPage .input-group input{
	border-color: green;
}
#mainPage .recommend{
	width:100%;
	padding:40px 5%;
}
#mainPage .large{
	height:1250px;
}
#mainPage .recommend .btn {
	margin: 0 auto;
	display: block;
}
#mainPage .recommend .cardBar {
	height:600px;
}
#mainPage .recommend .cardSmall {
	height:400px;
}
#mainPage .recommend .card img{
	width:100%;
	height:200px;
	background-color: gray;
}
#mainPage .shopping h1{
	color:rgb(255,255,255);
}
#mainPage .shopping{
	background-color: lightgreen;
}
#mainPage h1{
	color:rgb(122,122,122);
	margin-bottom:30px;
}
#mainPage .container {
	margin:0;
	padding:0;
	width:100%;
	min-width:1349px;
}
#mainPage .card{
	width:23%;
	margin:1%;
	float: left;
}
</style>

