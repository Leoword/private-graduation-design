<template>
	<highcharts :options="mixedOptions"></highcharts>
</template>

<script>
import Highcharts from '../highcharts.vue';

export default {
	name: "chart-line",
	component: {
		Highcharts
	},
	props: {
		series: {
			type: Array,
			required: true,
			default() {
				return [{
					data: []
				}];
			}
		},
		title: {
			type: Object,
			default() {
				return {};
			}
		},
		options: {
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
				title: this.title,
				chart: {
					type: 'line'
				}
			});
		}
	}
}
</script>
