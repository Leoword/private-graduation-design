 <template>
 	<div>

		<chart-pie v-if="state" :series="[{
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
		<chart-pie v-if="state" :series="[{
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
	</div>
 </template>

 <script>
import axios from 'axios';

export default {
	data() {
		return {
			collection:[],
			order: [],
			state: false
		}
	},
	created() {
		axios.get('api/personal/tourist/analysis').then((res) => {
			console.log(res.data);
			
			res.data.collection.forEach(element => {
				const item = {};
				
				item.name = element.type;
				item.y = element.number;

				this.collection.push(item);
			});

			res.data.order.forEach(element => {
				const item = {};
				
				item.name = element.type;
				item.y = element.number;

				this.order.push(item);
			});

			this.state = true;
		});
	}
}
</script>