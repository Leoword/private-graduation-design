<template>
	<form>
		<div class="form-group row">
			<label for="title" class="col-sm-2 col-form-label label">
				标题：
			</label>
			<input id="title" class="form-control 
			col-sm-6" type="text"
			v-model="topic.title"
			placeholder="输入四到十个汉字" @focus="hidden()" required/>
		</div>
		<div class="form-group row">
			<label for="type" class="col-sm-2 col-form-label label">
				话题类型：
			</label>
			<select id="type" class="custom-select col-sm-6"
			v-model="topic.type" @focus="hidden()">
				<option value="旅游经历分享">旅游经历分享</option>
				<option value="观光景点推荐">观光景点推荐</option>
				<option value="家庭旅游分享推荐">家庭旅游分享推荐</option>
				<option value="防骗妙招">防骗妙招</option>
				<option value="享受旅途技巧分享">享受旅途技巧分享</option>
			</select>
		</div>
		<div class="form-group row">
			<label for="content" class="col-sm-2 col-form-label label">
				内容：
			</label>
			<textarea id="content" class="form-control 
			col-sm-6" rows="10" 
			v-model="topic.content" @focus="hidden()" required>
			</textarea>
		</div>
		<div class="form-group row">
			<div class="col-sm-3"></div>
			<button type="submit" class="col-sm-1 btn btn-primary" @click="submit(topic)">提交</button>
			<div class="col-sm-1"></div>
			<button type="reset" class="col-sm-1 btn btn-primary">重置</button>
		</div>
		<p class="alert alert-warning" v-if="isPrompt">{{prompt}}</p>
	</form>

</template>

<script>
import axios from 'axios';
import {
	TITLE,
	validate
} from '../../mixin';

export default {
	data() {
		return {
			topic:{
				title: '',
				content: '',
				type: ''
			},
			isPrompt: false,
			prompt: ''
		}
	},
	methods: {
		submit(topic) {
			if (!validate(topic.title, TITLE)) {
				this.isPrompt = true;
				this.prompt = '输入标题格式不正确';

				return;
			}

			axios.post('api/personal/tourist/publish/topic', topic).then(res => {
				this.isPrompt = true;
				this.prompt = res.data.information;
			});
		},
		hidden() {
			this.isPrompt = false;
		}
	}
}
</script>