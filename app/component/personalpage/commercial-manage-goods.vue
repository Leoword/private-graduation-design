<template>
	<div>
		<table class="table" v-if="productionList !== null">
			<thead>
				<tr>
					<th scope="col">发布时间</th>
					<th scope="col">商品名</th>
					<th scope="col">价格</th>
					<th scope="col">目的地</th>
					<th scope="col">类型</th>
					<th scope="col">审核状态</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(production, index) in productionList"
				:key="index">
					<td>{{production.createdAt}}</td>
					<td>{{production.productionName}}</td>
					<td>{{production.price}}</td>
					<td>{{production.destination}}</td>
					<td>{{production.type}}</td>
					<td>{{production.state}}</td>
					<td>
						<button class="btn btn-primary"
						@click="deleteNote(production)">删除</button>
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
		<h1 v-if="productionList === null">{{tip}}</h1>
		<p class="alert alert-warning" v-if="isPrompt">{{prompt}}</p>
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
			number: 0
		}
	},
	beforeCreate() {
		return axios.get('/api/personal/business/manage-production').then((res) => {

			if (!res.data.information) {
				const {container, note} = pagenator(5, res.data, this.container, this.note);

				this.container = container;
				this.productionList = note;
			} else {
				this.tip = res.data.information;
			}
		});
	},
	methods: {
		deleteNote(production) {
			axios.put('/api/personal/business/delete', production).then(res => {
				if (res.data.prompt) {
					this.isPrompt = true;
					this.prompt = res.data.prompt;
				}
			});
		},
		changePage() {
			this.productionList = this.container[this.number];
		}
	}
}
</script>