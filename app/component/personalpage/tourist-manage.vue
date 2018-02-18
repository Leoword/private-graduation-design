<template>
	<div>
		<table class="table" v-if="tourist !== null">
			<thead>
				<tr>
					<th scope="col">用户名</th>
					<th scope="col">密码</th>
					<th scope="col">邮箱</th>
					<th scope="col">地址</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{{tourist.touristName}}</td>
					<td>{{tourist.password}}</td>
					<td>{{tourist.email}}</td>
					<td>{{tourist.address}}</td>
				</tr>
			</tbody>
		</table>
		<h1 v-if="tourist === null">{{tip}}</h1>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			tourist: null,
			tip: ''
		}
	},
	beforeCreate() {
		return axios.get('/api/personal/tourist/information').then((res) => {

			if (!res.data.information) {
				this.tourist = res.data;
			} else {
				this.tip = res.data.information;
			}
		});
	}
}
</script>

