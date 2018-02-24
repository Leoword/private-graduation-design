<template>
<div>
		<table class="table" v-if="production !== null">
			<thead>
				<tr>
					<th scope="col">商品名</th>
					<th scope="col">类型</th>
					<th scope="col">商品描述</th>
					<th scope="col">审核状态</th>
					<th scope="col">创建时间</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in production"
				:key="index">
					<td>{{item.productionName}}</td>
					<td>{{item.type}}</td>
					<td>{{item.describe}}</td>
					<td>{{item.state}}</td>
					<td>{{item.createdAt}}</td>
					<td>
						<button class="btn btn-primary"
						@click="pass = '通过';examine(item)">通过</button>
					</td>
					<td>
						<button class="btn btn-primary"
						@click="pass = '不通过';examine(item)">不通过</button>
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
		<h1 v-if="production === null">{{tip}}</h1>
	</div>
</template>
<script>
import axios from 'axios';
import {pagenator} from '../../mixin';

export default {
	data() {
		return {
			production: null,
			container: [],
			pass: '',
			tip: '',
			number: 0
		}
	},
	beforeCreate() {
		return axios.get('api/personal/administrator/exam/production').then((res) => {

			if (!res.data.information) {
				const {container, note} = pagenator(2, res.data, this.container, this.production);

				this.container = container;
				this.production = note;
			} else {
				this.tip = res.data.information;
			}
		});
	},
	methods: {
		examine(item) {
			item.state = this.pass;

			axios.put('api/personal/administrator/exam/production', item).then(res => {
				
			});
		},
		changePage() {
			this.production = this.container[this.number];
		}
	}
}
</script>