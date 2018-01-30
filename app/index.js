'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';

import App from './app.vue';
import router from './router';

new Vue(
	Object.assign({router}, App)
).$mount('#app');