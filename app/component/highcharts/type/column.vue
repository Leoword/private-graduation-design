<template>
	<highcharts :options="mixedOptions"></highcharts>
</template>

<script>
import Highcharts from '../highcharts.vue';

export default {
	name: "chart-column",
	component: {
		Highcharts
	},
	props: {
		series: {
			type:Array,
			required: true,
			default() {
				return [{
					data: [],
					color: undefined
				}];
			}
		},
		xAxis: {
			type: Object,
			required: true
		},
		title: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	computed: {
		mixedOptions() {
			
			return Object.assign({}, {
				series: this.series,
				xAxis: this.xAxis,
				title: this.title,
				chart: {
					type: 'column'
				}
			});
		}
	}
}
</script>
