<template>
	<div>
		<table class="table" v-if="orderList !== null">
			<thead>
				<tr>
					<th scope="col">生成时间</th>
					<th scope="col">商品名</th>
					<th scope="col">价格</th>
					<th scope="col">目的地</th>
					<th scope="col">类型</th>
					<th scope="col">状态</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(order, index) in orderList"
				:key="index">
					<td>{{order.orders[0].createdAt}}</td>
					<td>{{order.productionName}}</td>
					<td>{{order.price}}</td>
					<td>{{order.destination}}</td>
					<td>{{order.type}}</td>
					<td>{{order.orders[0].state}}</td>
					<!-- <td>
						<button class="btn btn-primary"
						@click="deleteNote(order)">删除</button>
					</td> -->
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
			number: 0
		}
	},
	beforeCreate() {
		return axios.get('api/personal/tourist/order').then((res) => {
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
			console.log(order);
			axios.put('api/personal/tourist/delete/order', order).then(res => {
				if (res.data.prompt) {
					this.isPrompt = true;
					this.prompt = res.data.prompt;
				}
			});
		},
		changePage() {
			this.orderList = this.container[this.number];
		}
	}
}
</script>