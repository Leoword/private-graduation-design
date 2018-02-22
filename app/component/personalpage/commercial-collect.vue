<template>
	<div>
		<chart-column :series="[{
			data: [10, 11, 12, 23, 20, 12, 23, 56, 56, 45, 10, 0]
		}]"
		:xAxis="{
			type: 'datetime'
		}"
		:title="{
			enabled: true,
			text: '本年度商品收藏情况表',
			style: {
				fontWeight: 'normal'
			}
		}"
		></chart-column>
		<!-- <chart-linear :series="[{
			data: [10, 11, 12, 23, 20, 12, 23, 56, 56, 45, 10, 0]
		}]"
		:xAxis="{
			type: 'datetime'
		}"
		:title="{
			enabled: true,
			text: '本年度商品收藏情况表',
			style: {
				fontWeight: 'normal'
			}
		}"
		></chart-linear> -->
		<chart-pie :series="[{
			data: [{
            name: 'IE',
            y: 56.33
        }, {
            name: 'Chrome',
            y: 24.03,
            sliced: true,
            selected: true
        }, {
            name: 'Firefox',
            y: 10.38
        }, {
            name: 'Safari',
            y: 4.77
        }, {
            name: 'Opera',
            y: 0.91
        }, {
            name: 'Other',
            y: 0.2
        }]
		}]"
		:title="{
			enabled: true,
			text: '12344',
			style: {
				fontWeight: 'normal'
			}
		}"></chart-pie>
	</div>
</template>
