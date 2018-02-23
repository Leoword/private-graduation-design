<template>
	<div>
		<table class="table" v-if="note !== null">
			<thead>
				<tr>
					<th scope="col">标题</th>
					<th scope="col">类型</th>
					<th scope="col">审核状态</th>
					<th scope="col">创建时间</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in note"
				:key="index">
					<td>{{item.title}}</td>
					<td>{{item.type}}</td>
					<td>{{item.state}}</td>
					<td>{{item.createdAt}}</td>
					<td>
						<button class="btn btn-primary"
						@click="deleteNote(item)">删除</button>
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
		<h1 v-if="note === null">{{tip}}</h1>
		<p class="alert alert-warning" v-if="isPrompt">{{prompt}}</p>
	</div>
</template>

<script>
import axios from 'axios';
import {pagenator} from '../../mixin';

export default {
	data() {
		return {
			note: null,
			tip: '',
			container: [],
			isPrompt: false,
			prompt: '',
			number: 0
		}
	},
	beforeCreate() {
		return axios.get('/api/personal/tourist/manage').then((res) => {

			if (!res.data.information) {
				const {container, note} = pagenator(5, res.data, this.container, this.note);

				this.container = container;
				this.note = note;

			}
		});
	},
	methods: {
		deleteNote(item) {
			axios.put('/api/personal/tourist/delete', item).then(res => {
				if (res.data.prompt) {
					this.isPrompt = true;
					this.prompt = res.data.prompt;
				}
			});
		},
		changePage() {
			this.note = this.container[this.number];
		}
	}
}
</script>

