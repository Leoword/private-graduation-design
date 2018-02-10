<template>
	<div class="text-center" id="signUp">
		<ul class="nav nav-pills mb-3 text-center">
			<li class="nav-item">
				<span class="nav-link">请选择注册类型：</span>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#tourist" @click="style='tourist'"
				:class="{ 'active': style === 'tourist' }">游客</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#business" @click="style='business'"
				:class="{ 'active': style === 'business' }">商户</a>
			</li>
		</ul>
		<div class="tab-content">
			<business class="tab-pane fade" :class="{ 'active': style === 'business', 'show': style === 'business'}"
			></business>
			<tourist class="tab-pane fade" :class="{ 'active': style === 'tourist', 'show': style === 'tourist'}"
			></tourist>
		</div>
	</div>
</template>

<script>
import Business from './Business-signup.vue';
import Tourist from './Tourist-signup.vue';

export default {
	name: 'login',
	data() {
		return {
			style: 'tourist'
		}
	},
	methods: {
		
	},
	components: {
		Business,
		Tourist
	}
}
</script>