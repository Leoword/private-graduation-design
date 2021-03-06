'use strict';

import Vue from 'vue';

import Highcharts from './highcharts.vue';
import './theme.js';

Vue.component('highcharts', Highcharts);

import Linear from './type/linear.vue';
import Column from './type/column.vue';
import Pie from './type/pie.vue';

Vue.component('chart-linear', Linear);
Vue.component('chart-pie', Pie);
Vue.component('chart-column', Column);