<template>
	<div class="mainpage">
		<nav class="nav-bar"></nav>
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
					@click="currentView = 'publish';viewName = '发表游记'">
						发表游记
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'manageTranvel' }"
					@click="currentView = 'manageTranvel';viewName = '个人游记'">
						个人游记
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'collect' }"
					@click="currentView = 'collect';viewName = '个人收藏'">
						个人收藏
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'query' }"
					@click="currentView = 'query';viewName = '订单查询'">
						订单查询
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'recommend' }"
					@click="currentView = 'recommend';viewName = '相关推荐'">
						相关推荐
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'analysis' }"
					@click="currentView = 'analysis';viewName = '偏好分析'">
						偏好分析
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'overview' }"
					@click="currentView = 'overview';viewName = '地区概览'">
						地区概览
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
import Manage from '../component/personalpage/tourist-manage.vue';
import Modify from '../component/personalpage/tourist-modify.vue';
import Alter from '../component/personalpage/tourist-alter.vue';
import Publish from '../component/personalpage/tourist-publish-tranvel.vue';
import ManageTranvel from '../component/personalpage/tourist-manage-tranvel.vue';
import Collect from '../component/personalpage/tourist-collect.vue';
import Query from '../component/personalpage/tourist-query.vue';
import Recommend from '../component/personalpage/tourist-recommend.vue';
import Analysis from '../component/personalpage/tourist-analysis.vue';
import Overview from '../component/personalpage/tourist-overview.vue';
import Signout from '../component/personalpage/tourist-signout.vue';

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
		ManageTranvel,
		Collect,
		Query,
		Recommend,
		Analysis,
		Overview,
		Signout
	}
}
</script>