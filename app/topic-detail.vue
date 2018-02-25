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
				内容：{{topic.content}}
			</p>
		</div>
		<div class="bottom">
			<h3>评论区：</h3>
			<div class="describe">
				<div v-if="!isShow">
					{{information}}
				</div>
				<div v-if="isShow" v-for="(item,index) in topicList"
				:key=index>
					游客 {{item.touristName}} : {{item.content}}
				</div>
				<nav v-if="isNav">
					<ul class="pagination">
						<li class="page-item"
						v-for="(item, index) in container"
						:key="index">
							<span class="page-link" href="#"
							@click="number = index;changePage()">{{index+1}}</span>
						</li>
					</ul>
				</nav>
			</div>
			<div class="right">
				<div class="form-group row">
					<label for="content" class="col-sm-1 col-form-label label">
						内容：
					</label>
					<textarea id="content" class="form-control 
					col-sm-10" rows="12" 
					v-model="comment.content" required>
					</textarea>
				</div>
				<div class="form-group row">
					<div class="col-sm-3"></div>
					<button type="submit" class="col-sm-2 btn btn btn-primary" @click="submit()">提交</button>
					<div class="col-sm-1"></div>
					<button type="reset" class="col-sm-2 btn btn-primary">重置</button>
				</div>
				<p class="alert alert-success" v-if="isPrompt">{{prompt}}</p>
			</div>
		</div>
	</div>

</template>

<script>
import NavSelf from './component/nav.vue';
import axios from 'axios';
import {pagenator} from './mixin';

export default {
	data() {
		return {
			topic: this.$route.query.topic,
			isShow: true,
			topicList: null,
			isPrompt: false,
			prompt: '',
			information: '',
			comment: {
				content: '',
				relativeTopic: this.$route.query.topic
			},
			container: [],
			number: 0,
			isNav: true,
			
		};
	},
	beforeCreate() {
		const topic = this.$route.query.topic;

		return axios.post('api/main/get/comment', topic).then(res => {
			if (res.data.information) {
				this.isShow = false;
				this.information = res.data.information;
			} else {
				const {container, note} = pagenator(8, res.data, this.container, this.topicList);

				if (container.length === 1) {
					this.isNav = false;
				}

				this.container = container;
				this.topicList = note;

				
			}
		});
	},
	methods: {
		submit() {
			console.log(this.comment);

			return axios.post('api/main/add/comment', this.comment).then(res => {
				this.isPrompt = true;
				this.prompt = res.data.information;
			});
		},
		changePage() {
			this.topicList = this.container[this.number];
		}
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
	width:100%;
	min-width: 1349px;
	padding: 60px;
}
#topicDetail .bottom {
	width:100%;
	min-width: 1349px;
	padding: 0 60px;
}
#topicDetail .content p{
	font-size: 18px;
	margin-top: 10px;
}
#topicDetail .bottom .describe{
	width:47%;
	height: 300px;
	margin-right: 95px;
	border: 2px solid gray;
	float: left;
	overflow: auto;
	padding: 20px;
}
#topicDetail .bottom .right{
	width:45%;
	height: 200px;
	float: left;
}
#topicDetail .bottom .right .form-group .label{
	margin:0;
	padding:0;
}
#topicDetail .bottom .right textarea{
	margin:0;
	padding:0;
}
</style>

