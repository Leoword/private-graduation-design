'use strict';

import Vue from 'vue';
import Router from 'vue-router';

import Signin from './Signin.vue';
import SignUp from './Signup-router.vue';
import Tourist from './Tourist-signup.vue';
import Business from './Business-signup.vue';
import touristMainPage from './tourist.vue';
import Commercial from './commercial.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/signin',
			component: Signin
		},
		{
			path: '/signup',
			component: SignUp
		},
		{
			path: '/signup/tourist',
			component: Tourist
		},
		{
			path: '/signup/business',
			component: Business
		},
		{
			path: '/tourist',
			component: touristMainPage
		},
		{
			path: '/business',
			component: Commercial
		}
	]
});