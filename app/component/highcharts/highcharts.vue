<template>
	<div class="highcharts" style="height:50%;width:90%"></div>
</template>

<script>
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';

export default {
	name: "highcharts",
	props: {
		options: {
			type: Object,
			default() {
				return {};
			},
			required:true
		}
	},
	mounted() {
		this.chart = new Highcharts.Chart(this.$el, this.options);
	},
	methods: {
		renderer() {
			this.chart.update(this.option);
		}
	},
	watch: {
		options() {
			this.renderer();
		}
	},
	beforeDestroy() {
		this.chart.destroy();
	}
}
</script>
