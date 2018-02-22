'use strict';

import Highcharts from 'highcharts';

Highcharts.setOptions(Highcharts.theme = {
	accessibility: {
		enabled: false
	},
	exporting: {
		enabled: false
	},
	credits: {
		enabled: false
	},
	colors: [
		'#2f7ed8', '#0d233a', '#8bbc21',
		'#910000', '#1aadce', '#492970',
		'#f28f43', '#77a1e5', '#c42525',
		'#a6c96a'
	],
	chart: {
		backgroundColor: 'transparent'
	},
	title: {
		style: {
			fontSize: '20px',
			fontWeight: 'bold'
		}
	},
	xAxis: {
		gridLineWidth: 0,
		lineColor: '#2f7ed8',
		lineWidth: 1,
		title: {
			text: null
		},
		labels: {
			style: {
				color: '#555',
				font: '14px Trebuchet MS, Verdana, sans-serif'
			}
		},
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	},
	yAxis: {
		gridLineWidth: 0,
		lineColor: '#2f7ed8',
		lineWidth: 1,
		title: {
			text: null
		},
		labels: {
			style: {
				color: '#555',
				font: '14px Trebuchet MS, Verdana, sans-serif'
			}
		}
	}
});