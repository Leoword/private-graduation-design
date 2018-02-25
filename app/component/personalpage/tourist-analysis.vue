 <template>
 	<div>

		<chart-pie :series="[{
			data: collection
		}]"
		:title="{
			enabled: true,
			text: '商品收藏偏好',
			style: {
				fontWeight: 'normal'
			}
		}">
		</chart-pie>
		<chart-pie :series="[{
			data: order
		}]"
		:title="{
			enabled: true,
			text: '商品购买偏好',
			style: {
				fontWeight: 'normal'
			}
		}">
		</chart-pie>
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

 <script>
import axios from 'axios';

export default {
	data() {
		return {
			collection: [{
				name: 'IE',
            	y: 56.33
			}],
			order: []
		}
	},
	beforeCreate() {
		axios.get('api/personal/tourist/analysis').then((res) => {
					const collection = [];
					const order = [];
				res.data.collection.forEach(element => {
					const item = {};
					
					item.name = element.type;
					item.y = element.number;

					collection.push(item);
				});
				res.data.order.forEach(element => {
					const item = {};
					
					item.name = element.type;
					item.y = element.number;

					order.push(item);
				});

				return {collection,order}
			}).then(({collection,order}) => {
				this.collection = collection;
				this.order = order;
			});
	},
	methods: {
		getCollection: function (collection) {
			axios.get('api/personal/tourist/analysis').then((res) => {
					
				res.data.collection.forEach(element => {
					const item = {};
					
					item.name = element.type;
					item.y = element.number;

					collection.push(item);
				});

				
			});

				return collection;
		},
		getOrder: function (order) {
			axios.get('api/personal/tourist/analysis').then((res) => {
					
				res.data.order.forEach(element => {
					const item = {};
					
					item.name = element.type;
					item.y = element.number;

					order.push(item);
				});
			});

			
			return order;
			
		}
	},
	mounted() {
		console.log(this.collection,this.order);
	}
}
</script>
//  data() {
// 		return {
// 			collection: [
// 				{
//             name: '王',
//             y: 56.33
//         }, {
//             name: 'Chrome',
//             y: 24.03,
//             sliced: true,
//             selected: true
//         }, {
//             name: 'Firefox',
//             y: 10.38
//         }, {
//             name: 'Safari',
//             y: 4.77
//         }, {
//             name: 'Opera',
//             y: 0.91
//         }, {
//             name: 'Other',
//             y: 0.2
//         }
// 			],
// 			order: [
// 				{
//             name: 'IE',
//             y: 56.33
//         }, {
//             name: 'Chrome',
//             y: 24.03,
//             sliced: true,
//             selected: true
//         }, {
//             name: 'Firefox',
//             y: 10.38
//         }, {
//             name: 'Safari',
//             y: 4.77
//         }, {
//             name: 'Opera',
//             y: 0.91
//         }, {
//             name: 'Other',
//             y: 0.2
//         }
// 			]
		
		
// 		}

// 	},
// 	beforeCreate() {
// 		axios.get('api/personal/tourist/analysis').then((res) => {
					
// 			res.data.collection.forEach(element => {
// 				const item = {};
				
// 				item.name = element.type;
// 				item.y = element.number;

// 				this.collection.push(item);
// 			});

// 			res.data.order.forEach(element => {
// 				const item = {};
				
// 				item.name = element.type;
// 				item.y = element.number;

// 				this.order.push(item);
// 			});
// 		});
// 	},
// 	mounted() {
// 		console.log(this.collection.length,this.order);
// 	}
// }