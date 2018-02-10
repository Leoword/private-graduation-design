<template>
	<div class="box-container">
		<div class="display-center text-center">
			<nav>
				<ul class="nav nav-tabs card-header-tabs">
					<li class="nav-item">
						<a class="nav-link" id="signin-tab"
						href="#signIn" :class="{ 'active': style === 'signin' }" @click="style='signin'">登陆</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" id="signup-tab"
						href="#signUp" :class="{ 'active': style === 'signup' }" @click="style='signup'">注册</a>
					</li>
				</ul>
			</nav>
			<div class="tab-content">
				<sign-in class="tab-pane fade" :class="{ 'active': style === 'signin', 'show': style === 'signin'}"
				></sign-in>
				<sign-up class="tab-pane fade" :class="{ 'active': style === 'signup', 'show': style === 'signup'}"
				></sign-up>
			</div>
		</div>
	</div>
</template>

<script>
import SignIn from './component/Signin.vue';
import SignUp from './component/Signup.vue';

export default {
	name: 'login',
	data() {
		return {
			style: 'signin'
		}
	},
	methods: {
		
	},
	components: {
		SignIn,
		SignUp
	}
}
</script>

<style>
.card-header-tabs {
	margin:0;
}
.box-container {
	width:100%;
	height:100%;
	background-image: url("../source/image/signin.jpg");
	position: absolute;
}
.display-center {
	width:500px;
	background:rgba(203, 220, 214, 0.9);
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

