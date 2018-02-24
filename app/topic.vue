<template>
	<div id="topic">
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
				<h1 class="text-center">全部话题</h1>
				<div class="cardBar" v-if="isShow">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">标题</th>
								<th scope="col">类型</th>
								<th scope="col">用户</th>
								<th scope="col">创建时间</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in topic"
							:key="index" @click="jump(item)">
								<td>{{item.title}}</td>
								<td>{{item.type}}</td>
								<td>{{item.touristName}}</td>
								<td>{{item.createdAt}}</td>
							</tr>
						</tbody>
					</table>
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
				<p class="p" v-if="!isShow">没有合适的话题存在！</p>
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
			topic: [],
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
		axios.get('api/main/topic').then(res => {
			if (res.data.lenght !== 0) {
				const {container, note} = pagenator(8, res.data, this.container, this.topic);

				this.container = container;
				this.topic = note;
			} else {
				this.isShow = false;
			}

		});
	},
	methods: {
		google() {
			axios.post('api/main/topic', this.type).then(res => {
				if (res.data.lenght !== 0 || res.data.lenght !== undefined) {
					this.topic = res.data;
					this.isNav = false;
				} else {
					this.isShow = false;
				}
			})
		},
		changePage() {
			this.topic = this.container[this.number];
		},
		jump(item) {
			this.$router.push({
				path: '/topic/detail',
				query: {
					topic: item
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
#topic .container {
	margin:0;
	padding:0;
	width:100%;
	min-width:1349px;
}
#topic .input-group {
	width:40%;
	margin:30px auto;
}
#topic .input-group input{
	border-color: green;
}
#topic .recommend{
	width:100%;
	padding:40px 5%;
}
#topic .recommend .p{
	text-align: center;
	font-size: 40px;
	font-weight: bold;
	margin-top: 20px;
}
#topic .recommend .btn {
	margin: 0 auto;
	display: block;
}
#topic .recommend .cardBar {
	height:600px;
}
#topic h1{
	color:rgb(122,122,122);
	margin-bottom:30px;
}
</style>