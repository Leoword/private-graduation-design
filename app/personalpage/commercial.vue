<template>
	<div class="mainpage">
		<nav-self></nav-self>
		<div class="content">
			<div class="head">
				<img src='../../source/image/tourist_top.jpg'/>
			</div>
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item active">个人主页</li>
					<li class="breadcrumb-item active">{{viewName}}</li>
				</ol>
			</nav>
			<div class="body">
				<div class="left">
					<div class="item"
					:class="{ 'on': currentView === 'manage' }"
					@click="currentView = 'manage';viewName = '资料概览'">
						资料概览
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'modify' }"
					@click="currentView = 'modify';viewName = '资料完善'">
						资料完善
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'alter' }"
					@click="currentView = 'alter';viewName = '修改密码'">
						修改密码
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'publish' }"
					@click="currentView = 'publish';viewName = '发布商品'">
						发布商品
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'manageGoods' }"
					@click="currentView = 'manageGoods';viewName = '商品管理'">
						商品管理
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'dealOrder' }"
					@click="currentView = 'dealOrder';viewName = '订单处理'">
						订单处理
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'collect' }"
					@click="currentView = 'collect';viewName = '收藏情况'">
						收藏情况
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'sale' }"
					@click="currentView = 'sale';viewName = '销售情况'">
						销售情况
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'signout' }"
					@click="currentView = 'signout';viewName = '账户登出'">
						账户登出
					</div>
				</div>
				<div class="right">
					<component :is="currentView"></component>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Manage from '../component/personalpage/commercial-manage.vue';
import Modify from '../component/personalpage/commercial-modify.vue';
import Alter from '../component/personalpage/commercial-alter.vue';
import Publish from '../component/personalpage/commercial-publish.vue';
import ManageGoods from '../component/personalpage/commercial-manage-goods.vue';
import DealOrder from '../component/personalpage/commercial-deal-order.vue';
import Collect from '../component/personalpage/commercial-collect.vue';
import Sale from '../component/personalpage/commercial-sale.vue';
import Signout from '../component/personalpage/commercial-signout.vue';
import NavSelf from '../component/nav.vue';

export default {
	name: 'tourist',
	data() {
	  return {
		  currentView: 'manage',
		  viewName: '资料管理'
	  };
	},
	components: {
		Manage,
		Modify,
		Alter,
		Publish,
		ManageGoods,
		DealOrder,
		Collect,
		Sale,
		Signout,
		NavSelf
	}
}
</script>
