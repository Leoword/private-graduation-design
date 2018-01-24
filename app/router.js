'use strict';

import Vue from 'vue';
import Router from 'vue-router';

import Login from './login.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			component: Login
		}
	]
});