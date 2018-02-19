<template>
	<div>
		<table class="table" v-if="note !== null">
			<thead>
				<tr>
					<th scope="col">标题</th>
					<th scope="col">内容</th>
					<th scope="col">创建时间</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in note"
				:key="index">
					<td>{{item.title}}</td>
					<td>{{item.content}}</td>
					<td>{{item.createdAt}}</td>
					<td>
						<button class="btn btn-primary"
						@click="deleteNote(item)">删除</button>
					</td>
				</tr>
			</tbody>
		</table>
		<h1 v-if="note === null">{{tip}}</h1>
		<p class="alert alert-warning" v-if="isPrompt">{{prompt}}</p>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			note: null,
			tip: '',
			isPrompt: false,
			prompt: ''
		}
	},
	beforeCreate() {
		return axios.get('/api/personal/tourist/manage').then((res) => {

			if (!res.data.information) {
				this.note = res.data;
			} else {
				this.tip = res.data.information;
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
		}
	}
}
</script>

