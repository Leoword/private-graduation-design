<template>
	<div class="text-center">
		<ul class="nav nav-pills mb-3 text-center">
			<li class="nav-item">
				<span class="nav-link">请选择注册类型：</span>
			</li>
			<li class="nav-item">
				<span class="nav-link" @click="style = 'tourist'; currentView = 'Tourist'"
				:class="{ 'active': style === 'tourist' }">游客</span>
			</li>
			<li class="nav-item">
				<span class="nav-link" @click="style = 'business'; currentView = 'Business'"
				:class="{ 'active': style === 'business' }">商户</span>
			</li>
		</ul>
		<div class="tab-content">
			<component class="tab-pane active" :is="currentView"></component>
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
			style: 'tourist',
			currentView: 'Tourist'
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