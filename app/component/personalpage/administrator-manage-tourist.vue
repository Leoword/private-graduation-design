<template>
	<div>
		<table class="table" v-if="tourist !== null">
			<thead>
				<tr>
					<th scope="col">用户名</th>
					<th scope="col">创建时间</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in tourist"
				:key="index">
					<td>{{item.touristName}}</td>
					<td>{{item.createdAt}}</td>
					<td>
						<button class="btn btn-primary"
						@click="deleteTourist(item)">删除</button>
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
		<h1 v-if="tourist === null">{{tip}}</h1>
		<p class="alert alert-warning" v-if="isPrompt">{{prompt}}</p>
	</div>
</template>
<script>
import axios from 'axios';
import {pagenator} from '../../mixin';

export default {
	data() {
		return {
			tourist: null,
			container: [],
			tip: '',
			isPrompt: false,
			prompt: '',
			number: 0
		}
	},
	beforeCreate() {
		return axios.get('api/personal/administrator/manageTourist').then((res) => {

			if (!res.data.information) {
				const {container, note} = pagenator(5, res.data, this.container, this.tourist);

				this.container = container;
				this.tourist = note;
			} else {
				this.tip = res.data.information;
			}
		});
	},
	methods: {
		deleteTourist(item) {
			axios.put('/api/personal/administrator/deleteTourist', item).then(res => {
				if (res.data.prompt) {
					this.isPrompt = true;
					this.prompt = res.data.prompt;
				}
			});
		},
		changePage() {
			this.tourist = this.container[this.number];
		}
	}
}
</script>