<template>
	<div>
		<table class="table" v-if="business !== null">
			<thead>
				<tr>
					<th scope="col">用户名</th>
					<th scope="col">密码</th>
					<th scope="col">真实姓名</th>
					<th scope="col">身份证号码</th>
					<th scope="col">邮箱</th>
					<th scope="col">地址</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{{business.businessName}}</td>
					<td>{{business.password}}</td>
					<td>{{business.realName}}</td>
					<td>{{business.id}}</td>
					<td>{{business.email}}</td>
					<td>{{business.address}}</td>
				</tr>
			</tbody>
		</table>
		<h1 v-if="business === null">{{tip}}</h1>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			business: null,
			tip: ''
		}
	},
	beforeCreate() {
		return axios.get('/api/personal/business/information').then((res) => {

			if (!res.data.information) {
				this.business = res.data;
			} else {
				this.tip = res.data.information;
			}
		});
	}
}
</script>