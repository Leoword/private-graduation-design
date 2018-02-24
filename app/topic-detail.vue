<template>
	<div id="topicDetail">
		<nav-self></nav-self>
		<div class="content">
			<h1>{{topic.title}}</h1>
			<div class="row">
				<span class="col-sm-3">游记类型：{{topic.type}}</span>
				<span class="col-sm-4">游记发布者：{{topic.touristName}}</span>
			</div>
			<div class="row">
				<span class="col-sm-12">发布时间：{{topic.createdAt}}</span>
			</div>
			<p>
				{{topic.content}}
			</p>
		</div>
		<div class="describe">
			<div v-if="isShow">

			</div>
			<div v-if="!isShow" v-for="(item,index) in topic"
			:key=index>

			</div>
		</div>
		<div class="form-group row">
			<label for="content" class="col-sm-2 col-form-label label">
				内容：
			</label>
			<textarea id="content" class="form-control 
			col-sm-6" rows="10" 
			v-model="comment.content" required>
			</textarea>
		</div>
		<div class="form-group row">
			<div class="col-sm-3"></div>
			<button type="submit" class="col-sm-1 btn btn-primary" @click="submit(comment)">提交</button>
			<div class="col-sm-1"></div>
			<button type="reset" class="col-sm-1 btn btn-primary">重置</button>
		</div>
	</div>

</template>

<script>
import NavSelf from './component/nav.vue';
import axios from 'axios';

export default {
	data() {
		return {
			topic: this.$route.query.topic,
			isShow: true,
			topic: null,
			comment: {
				content: ''
			}
		};
	},
	beforeCreate() {
		return axios.post('',topic).then(res => {

		});
	},
	components: {
		NavSelf
	}
}
</script>
<style>
#topicDetail{
	width:100%;
	min-width: 1349px;
}
#topicDetail .content {
	margin: 20px auto;
	padding: 10px;
	width:90%;
}
#topicDetail .content p{
	font-size: 18px;
}
#topicDetail .describe{
	width:80%;
	height: 200px;
	margin-left: 70px;
	border: 2px solid gray;
}
</style>

