<template>
	<div id="note">
		<div class="container">
			<nav-self></nav-self>
			<div class="input-group">
				<select class="custom-select" id="inputGroupSelect04" v-model="type.typeValue">
					<option value="" selected>选择感兴趣的游记类型</option>
					<option value="旅游经历分享">旅游经历分享</option>
					<option value="观光景点推荐">观光景点推荐</option>
					<option value="家庭旅游分享推荐">家庭旅游分享推荐</option>
					<option value="防骗妙招">防骗妙招</option>
					<option value="享受旅途技巧分享">享受旅途技巧分享</option>
				</select>
				<div class="input-group-append">
					<button class="btn btn-success" type="button" @click="google()">搜索</button>
				</div>
			</div>
			<div class="recommend">
				<h1 class="text-center">全部游记</h1>
				<div class="cardBar" v-if="isShow">
					<div class="card" v-for="(item,index) in note"
					:key="index" @click="jump(item)">
						<img class="card-img-top"
						:src="url + image"
						alt="未上传图片">
						<div class="card-body">
							<p class="card-text">{{item.title}}</p>
							<p class="card-text">
								<span>{{item.type}}</span>
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
				<p class="p" v-if="!isShow">没有合适的游记存在</p>
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
			note: [],
			moreNote: [],
			url: 'http://localhost:4000/',
			image: '1.jpg',
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
		axios.get('api/main/note').then(res => {
			if (res.data.lenght !== 0) {
				const {container, note} = pagenator(8, res.data, this.container, this.note);

				this.container = container;
				this.note = note;
			} else {
				this.isShow = false;
			}

		});
	},
	methods: {
		google() {
			axios.post('api/main/note', this.type).then(res => {
				if (res.data.lenght !== 0 || res.data.lenght !== undefined) {
					this.note = res.data;
					this.isNav = false;
				} else {
					this.isShow = false;
				}
			})
		},
		changePage() {
			this.note = this.container[this.number];
		},
		jump(item) {
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
#note .container {
	margin:0;
	padding:0;
	width:100%;
	min-width:1349px;
}
#note .input-group {
	width:40%;
	margin:30px auto;
}
#note .input-group input{
	border-color: green;
}
#note .recommend{
	width:100%;
	padding:40px 5%;
}
#note .recommend .p{
	text-align: center;
	font-size: 40px;
	font-weight: bold;
	margin-top: 20px;
}
#note .recommend .btn {
	margin: 0 auto;
	display: block;
}
#note .recommend .cardBar {
	height:600px;
}
#note h1{
	color:rgb(122,122,122);
	margin-bottom:30px;
}
#note .card{
	width:23%;
	margin:1%;
	float: left;
}
#note .recommend .card img{
	width:100%;
	height:200px;
	background-color: gray;
}
</style>