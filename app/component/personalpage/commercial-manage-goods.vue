<template>
	<div>
		<table class="table" v-if="productionList !== null">
			<thead>
				<tr>
					<th scope="col">发布时间</th>
					<th scope="col">商品名</th>
					<th scope="col">价格</th>
					<th scope="col">类型</th>
					<th scope="col">商品描述</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(production, index) in productionList"
				:key="index">
					<td>{{production.createdAt}}</td>
					<td>{{production.productionName}}</td>
					<td>{{production.price}}</td>
					<td>{{production.type}}</td>
					<td>{{production.describe}}</td>
					<td>
						<button class="btn btn-primary"
						@click="deleteNote(production)">删除</button>
					</td>
				</tr>
			</tbody>
		</table>
		<h1 v-if="productionList === null">{{tip}}</h1>
		<p class="alert alert-warning" v-if="isPrompt">{{prompt}}</p>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			productionList: null,
			tip: '',
			isPrompt: false,
			prompt: ''
		}
	},
	beforeCreate() {
		return axios.get('/api/personal/business/manage-production').then((res) => {

			if (!res.data.information) {
				this.productionList = res.data;
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
		}
	}
}
</script>