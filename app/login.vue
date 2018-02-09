<template>
	<div class="box-container">
		<div class="display-center card text-center">
			<div class="card-header">
				<ul class="nav nav-tabs card-header-tabs">
				<li class="nav-item">
					<a class="nav-link" href="#" :class="{ 'active': style === 'tourist' }" @click="style='tourist'">游客</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" :class="{ 'active': style === 'business' }" @click="style='business'">商户</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" :class="{ 'active': style === 'administrator' }" @click="style='administrator'">管理员</a>
				</li>
				</ul>
			</div>
			<div class="card-body">
				<sign-in :type="style"></sign-in>
			</div>
		</div>
	</div>
</template>

<script>
import SignIn from './component/Signin.vue';

export default {
	name: 'login',
	data() {
		return {
			style: 'tourist'
		}
	},
	methods: {
		
	},
	components: {
		SignIn
	}
}
</script>

<style>
.box-container {
	width:100%;
	height:100%;
	background-image: url("../source/image/signin.jpg");
	position: absolute;
}
.display-center {
	width:500px;
	background:rgba(203, 220, 214, 0.78);
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #007bff;
	font-size:20px;
}

#login {
	width:500px;
}
</style>

