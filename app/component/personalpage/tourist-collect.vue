<template>
	<div>
		<table class="table" v-if="collectionList !== null">
			<thead>
				<tr>
					<th scope="col">发布时间</th>
					<th scope="col">商品名</th>
					<th scope="col">价格</th>
					<th scope="col">目的地</th>
					<th scope="col">类型</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(collection, index) in collectionList"
				:key="index">
					<td>{{collection.createdAt}}</td>
					<td>{{collection.productionName}}</td>
					<td>{{collection.price}}</td>
					<td>{{collection.destination}}</td>
					<td>{{collection.type}}</td>
					<td>{{collection.state}}</td>
					<td>
						<button class="btn btn-primary"
						@click="deleteNote(collection)">删除</button>
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
		<h1 v-if="collectionList === null">{{tip}}</h1>
		<p class="alert alert-warning" v-if="isPrompt">{{prompt}}</p>
	</div>
</template>

<script>
import axios from 'axios';
import {pagenator} from '../../mixin';

export default {
	data() {
		return {
			collectionList: null,
			tip: '',
			isPrompt: false,
			prompt: '',
			container: [],
			number: 0
		}
	},
	beforeCreate() {
		return axios.get('api/personal/tourist/collection').then((res) => {

			if (!res.data.information) {
				const {container, note} = pagenator(5, res.data, this.container, this.collectionList);

				this.container = container;
				this.collectionList = note;
			} else {
				this.tip = res.data.information;
			}
		});
	},
	methods: {
		deleteNote(collection) {
			axios.put('api/personal/tourist/delete/collection', collection).then(res => {
				if (res.data.prompt) {
					this.isPrompt = true;
					this.prompt = res.data.prompt;
				}
			});
		},
		changePage() {
			this.collectionList = this.container[this.number];
		}
	}
}
</script>