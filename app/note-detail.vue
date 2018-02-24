<template>
	<div id="noteDetail">
		<nav-self></nav-self>
		<div class="content">
			<h1 class="text-center">{{note.title}}</h1>
			<div class="describe row">
				<span class="col-sm-6">游记类型：{{note.type}}</span>
				<span class="col-sm-1"></span>
				<span class="col-sm-4">游记发布者：{{note.touristName}}</span>
			</div>
			<div class="row">
				<span class="col-sm-12 text-center">发布时间：{{note.createdAt}}</span>
			</div>
			<p>
				{{note.content}}
			</p>
		</div>
	</div>

</template>

<script>
import NavSelf from './component/nav.vue';
import axios from 'axios';

export default {
	data() {
		return {
			note: this.$route.query.note
		};
	},
	components: {
		NavSelf
	}
}
</script>
<style>
#noteDetail{
	width:100%;
	min-width: 1349px;
}
#noteDetail .content {
	width:80%;
	margin: 60px auto;
}
#noteDetail .content p{
	width:70%;
	margin: 40px auto;
	text-indent: 2em;
	font-size: 18px;
}
#noteDetail .content .describe{
	width:50%;
	margin:20px auto;
}
</style>
