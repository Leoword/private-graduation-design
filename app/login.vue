<template>
	<div class="box-container">
		<nav-self></nav-self>
		<div class="display-center text-center">
			<nav>
				<ul class="nav nav-tabs card-header-tabs">
					<li class="nav-item">
						<span class="nav-link" :class="{ 'active': style === 'signin' }" 
						@click="style='signin';currentView='SignIn'">登陆</span>
					</li>
					<li class="nav-item">
						<span class="nav-link" :class="{ 'active': style === 'signup' }" 
						@click="style='signup';currentView='SignUp'">注册</span>
					</li>
				</ul>
			</nav>
			<div class="tab-content">
				<component class="tab-pane active" :is='currentView'></component>
			</div>
		</div>
	</div>
</template>

<script>
import SignIn from './component/login/Signin.vue';
import SignUp from './component/login/Signup.vue';
import NavSelf from './component/nav.vue';

export default {
	name: 'login',
	data() {
		return {
			style: 'signin',
			currentView: 'SignIn'
		}
	},
	methods: {
		
	},
	components: {
		SignIn,
		SignUp,
		NavSelf
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
#mainPage .recommend .card img{
	width:100%;
	height:200px;
	background-color: gray;
}
#mainPage .shopping h1{
	color:rgb(255,255,255);
}
</style>

