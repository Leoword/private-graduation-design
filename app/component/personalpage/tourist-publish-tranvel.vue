<template>
	<form>
		<div class="form-group row">
			<label for="title" class="col-sm-2 col-form-label label">
				标题：
			</label>
			<input id="title" class="form-control 
			col-sm-6" type="text"
			v-model="tranvel.title"
			placeholder="输入四到十个汉字" @focus="hidden()" required/>
		</div>
		<div class="form-group row">
			<label for="type" class="col-sm-2 col-form-label label">
				游记类型：
			</label>
			<select id="type" class="custom-select col-sm-6"
			v-model="tranvel.type" @focus="hidden()">
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
			v-model="tranvel.content" @focus="hidden()" required>
			</textarea>
		</div>
		<div class="form-group row">
			<div class="col-sm-3"></div>
			<button type="submit" class="col-sm-1 btn btn-primary" @click="submit(tranvel)">提交</button>
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
			tranvel:{
				title: '',
				content: '',
				type: ''
			},
			isPrompt: false,
			prompt: ''
		}
	},
	methods: {
		submit(tranvel) {
			if (!validate(tranvel.title, TITLE)) {
				this.isPrompt = true;
				this.prompt = '输入标题格式不正确';

				return;
			}

			axios.post('api/personal/tourist/publish', tranvel).then(res => {
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
