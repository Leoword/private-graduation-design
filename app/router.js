'use strict';

import Vue from 'vue';
import Router from 'vue-router';

import Signin from './component/Signin.vue';
import Login from './login.vue';
import Tourist from './component/Tourist-signup.vue';
import Business from './component/Business-signup.vue';
import touristMainPage from './controlpanel/tourist.vue';
import Commercial from './controlpanel/commercial.vue';
import Administrator from './controlpanel/administrator.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/login',
			component: Login
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