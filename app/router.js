'use strict';

import Vue from 'vue';
import Router from 'vue-router';

import Login from './login.vue';
import Mainpage from './mainPage.vue';
import touristMainPage from './personalpage/tourist.vue';
import Commercial from './personalpage/commercial.vue';
import Administrator from './personalpage/administrator.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/login',
			component: Login
		},
		{
			path: '/mainPage',
			component: Mainpage
		},
		{
			path: '/personalPage/tourist',
			component: touristMainPage
		},
		{
			path: '/personalPage/business',
			component: Commercial
		},
		{
			path: '/personalPage/administrator',
			component: Administrator
		}
	]
});