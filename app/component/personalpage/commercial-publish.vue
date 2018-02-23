<template>
	<form>
		<div class="form-group row">
			<label for="name" class="col-sm-2 col-form-label label">
				商品名：
			</label>
			<input id="name" class="form-control 
			col-sm-6" type="text"
			v-model="production.name"
			placeholder="输入四到十个汉字" @focus="hidden()" required/>
		</div>
		<div class="form-group row">
			<label for="price" class="col-sm-2 col-form-label label">
				价格：
			</label>
			<input id="price" class="form-control 
			col-sm-6" type="text"
			v-model="production.price"
			placeholder="输入数字" @focus="hidden()" required/>
		</div>
			<div class="form-group row">
			<label for="destination" class="col-sm-2 col-form-label label">
				目的地：
			</label>
			<input id="destination" class="form-control 
			col-sm-6" type="text"
			v-model="production.destination"
			placeholder="输入地址" @focus="hidden()" required/>
		</div>
		<div class="form-group row">
			<label for="type" class="col-sm-2 col-form-label label">
				商品类型：
			</label>
			<select id="type" class="custom-select col-sm-6"
			v-model="production.type" @focus="hidden()">
				<option value="观光旅游">观光旅游</option>
				<option value="文娱消遣旅游">文娱消遣旅游</option>
				<option value="公务旅游">公务旅游</option>
				<option value="个人及家庭事务旅游">个人及家庭事务旅游</option>
				<option value="保健旅游">保健旅游</option>
				<option value="文化类旅游">文化类旅游</option>
				<option value="生态/探险旅游">生态/探险旅游</option>
			</select>
		</div>
		<div class="form-group row">
			<label for="describe" class="col-sm-2 col-form-label label">
				商品简介：
			</label>
			<textarea id="describe" class="form-control 
			col-sm-6" rows="10" 
			v-model="production.describe" @focus="hidden()" required>
			</textarea>
		</div>
		<div class="form-group row">
			<label for="image" class="col-sm-2 col-form-label label">
				商品图片：
			</label>
			<input id="image"  type="file"
			@change="fileUpload()" @focus="hidden()" required />
		</div>
		<div class="form-group row">
			<div class="col-sm-3"></div>
			<button type="submit" class="col-sm-1 btn btn-primary" @click="submit(production)">提交</button>
			<div class="col-sm-1"></div>
			<button type="reset" class="col-sm-1 btn btn-primary">重置</button>
		</div>
		<p class="alert alert-warning" v-if="isPrompt">{{prompt}}</p>
		<img src="http://localhost:4000/1.jpg"/>
	</form>

</template>

<script>
import axios from 'axios';
import {
	TITLE,
	PRICE,
	validate
} from '../../mixin';

export default {
	data() {
		return {
			production:{
				name: '',
				type: '',
				describe: '',
				price: '',
				destination: ''
			},
			isPrompt: false,
			prompt: ''
		}
	},
	methods: {
		submit(production) {
			if (!validate(production.name, TITLE)) {
				this.isPrompt = true;
				this.prompt = '输入标题格式不正确';

				return;
			}

			if (!validate(production.price, PRICE)) {
				this.isPrompt = true;
				this.prompt = '输入价格不正确';

				return;
			}

			if (!validate(production.destination, TITLE)) {
				this.isPrompt = true;
				this.prompt = '输入目的地不明确！';

				return;
			}
			
			const file = this.production.image;

			if (file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'image/jpeg') {
				this.isPrompt = true;
				this.prompt = '上传图片格式不正确！';

				return;
			}

			const formData = new FormData();
			formData.append('name', this.production.name);
			formData.append('type', this.production.type);
			formData.append('price', this.production.price);
			formData.append('describe', this.production.describe);
			formData.append('destination', this.production.destination);
			formData.append('image', this.production.image);

			axios.post('api/personal/business/publish', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}).then(res => {
				this.isPrompt = true;
				this.prompt = res.data.information;
			});
		},
		fileUpload() {
			const file = event.target.files[0];

			this.production.image = file;
		},
		hidden() {
			this.isPrompt = false;
		}
	}
}
</script>
