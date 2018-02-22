'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';

import App from './app.vue';
import router from './router';

import './component/highcharts';
import AMap from 'vue-amap';

Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

new Vue(
	Object.assign({router}, App)
).$mount('#app');