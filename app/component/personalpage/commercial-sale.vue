<template>
	<div>
		<chart-linear v-if="state" :series="[{
			data: production
		}]"
		:xAxis="{
			type: 'datetime',
			categories: name
		}"
		:title="{
			enabled: true,
			text: '各类商品销售情况表',
			style: {
				fontWeight: 'normal'
			}
		}"
		></chart-linear>
		<chart-pie v-if="state" :series="[{
			data: collection
		}]"
		:title="{
			enabled: true,
			text: '每个商品销售情况',
			style: {
				fontWeight: 'normal'
			}
		}"></chart-pie>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			production:[],
			collection: [],
			name: [],
			state: false
		}
	},
	created() {
		axios.get('api/personal/business/analysis/order').then((res) => {
			console.log(res.data);
			res.data.production.forEach(element => {
				const item = {};
				
				item.name = element.productionName;
				item.y = element.saleNumber;

				this.collection.push(item);
			});

			res.data.sale.forEach(element => {
				
				this.production.push(parseFloat(element.number));
				this.name.push(element.type);

			});

			this.state = true;
			console.log(this.collection);
		});
	}
}
</script>