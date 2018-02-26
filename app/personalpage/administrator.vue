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
					:class="{ 'on': currentView === 'manage-commercial' }"
					@click="currentView = 'manage-commercial';viewName = '商户管理'">
						商户管理
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'manage-tourist' }"
					@click="currentView = 'manage-tourist';viewName = '游客管理'">
						游客管理
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'publish-artical' }"
					@click="currentView = 'publish-artical';viewName = '发布文章'">
						发布文章
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'manage-artical' }"
					@click="currentView = 'manage-artical';viewName = '管理文章'">
						管理文章
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'production-examine' }"
					@click="currentView = 'production-examine';viewName = '商品审核'">
						商品审核
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'note-examine' }"
					@click="currentView = 'note-examine';viewName = '游记审核'">
						游记审核
					</div>
					<div class="item"
					:class="{ 'on': currentView === 'topic-examine' }"
					@click="currentView = 'topic-examine';viewName = '话题审核'">
						话题审核
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
import ManageCommercial from '../component/personalpage/administrator-manage-commercial.vue';
import ManageTourist from '../component/personalpage/administrator-manage-tourist.vue';
import ProductionExamine from '../component/personalpage/administrator-examine-production.vue';
import ManageArtical from '../component/personalpage/administrator-manage-artical.vue';
import PublishArtical from '../component/personalpage/administrator-publish-artical.vue';
import NoteExamine from '../component/personalpage/administrator-examine-note.vue';
import TopicExamine from '../component/personalpage/administrator-examine-topic.vue';
import Signout from '../component/personalpage/administrator-signout.vue';
import NavSelf from '../component/nav.vue';

export default {
	name: 'tourist',
	data() {
	  return {
		  currentView: 'manage-commercial',
		  viewName: '商户管理'
	  };
	},
	components: {
		ManageCommercial,
		ManageTourist,
		ProductionExamine,
		NoteExamine,
		TopicExamine,
		ManageArtical,
		PublishArtical,
		Signout,
		NavSelf
	}
}
</script>