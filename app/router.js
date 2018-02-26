'use strict';

import Vue from 'vue';
import Router from 'vue-router';

import Login from './login.vue';
import Production from './production.vue';
import ProductionDetail from './production-detail.vue';
import Search from './search.vue';
import Note from './note.vue';
import Artical from './artical.vue';
import NoteDetail from './note-detail.vue';
import Topic from './topic.vue';
import TopicDetail from './topic-detail.vue';
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
			path: '/production',
			component: Production
		},
		{
			path: '/note',
			component: Note
		},
		{
			path: '/artical',
			component: Artical
		},
		{
			path: '/topic',
			component: Topic
		},
		{
			path: '/production/detail',
			component: ProductionDetail
		},
		{
			path: '/note/detail',
			component: NoteDetail
		},
		{
			path: '/topic/detail',
			component: TopicDetail
		},
		{
			path: '/mainPage',
			component: Mainpage
		},
		{
			path: '/search',
			component: Search
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