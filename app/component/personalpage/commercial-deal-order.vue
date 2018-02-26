<template>
	<div>
		<table class="table" v-if="orderList !== null">
			<thead>
				<tr>
					<th scope="col">生成时间</th>
					<th scope="col">商品名</th>
					<th scope="col">类型</th>
					<th scope="col">状态</th>
					<th scope="col">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(order, index) in orderList"
				:key="index">
					<td>{{order.orders[0].createdAt}}</td>
					<td>{{order.productionName}}</td>
					<td>{{order.type}}</td>
					<td>{{order.orders[0].state}}</td>
					<td v-if="order.orders[0].state === '待处理'">
						<button class="btn btn-primary"
						@click="pass = '成功处理';examine(order)">已处理</button>
					</td>
					<td v-if="order.orders[0].state === '待处理'">
						<button class="btn btn-primary"
						@click="pass = '订单过期';examine(order)">已过期</button>
					</td>
					<td>
						<button class="btn btn-primary"
						@click="deleteNote(order)">删除</button>
					</td>
				</tr>
			</tbody>
		</table>
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
		<h1 v-if="orderList === null">{{tip}}</h1>
		<p class="alert alert-warning" v-if="isPrompt">{{prompt}}</p>
	</div>
</template>

<script>
import axios from 'axios';
import {pagenator} from '../../mixin';

export default {
	data() {
		return {
			orderList: null,
			tip: '',
			isPrompt: false,
			prompt: '',
			container: [],
			number: 0,
			pass: ''
		}
	},
	beforeCreate() {
		return axios.get('api/personal/business/order').then((res) => {
			if (!res.data.information) {
				const {container, note} = pagenator(5, res.data, this.container, this.orderList);

				this.container = container;
				this.orderList = note;
			} else {
				this.tip = res.data.information;
			}
		});
	},
	methods: {
		deleteNote(order) {
			axios.put('api/personal/tourist/delete/order', order).then(res => {
				if (res.data.prompt) {
					this.isPrompt = true;
					this.prompt = res.data.prompt;
				}
			});
		},
		examine(item) {
			item.state = this.pass;

			axios.put('api/personal/business/deal/order', item).then(res => {
				
			});
		},
		changePage() {
			this.orderList = this.container[this.number];
		}
	}
}
</script>