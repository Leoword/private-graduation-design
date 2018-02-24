<template>
	<div id="nav">
		<nav class="navbar navbar-expand-lg navbar-light">
			<div id="navbarNavDropdown">
				<ul class="navbar-nav left">
					<li class="nav-item">
						<router-link class="nav-link" to="/login">登录 | 注册</router-link>
					</li>
				</ul>
				<ul class="navbar-nav right">
					<li class="nav-item">
						<router-link class="nav-link" to="/mainPage">首页</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/production">商城</router-link>
					</li>
					<li class="nav-item dropdown">
						<span class="nav-link dropdown-toggle" @click="isShow = !isShow">个人主页</span>
						<div class="dropdown-menu" :class="{ 'show': isShow}">
							<router-link class="dropdown-item" to="/personalPage/tourist">游客</router-link>
							<router-link class="dropdown-item" to="/personalPage/business">商户</router-link>
							<router-link class="dropdown-item" to="/personalPage/administrator">管理员</router-link>
						</div>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/note">游记</router-link>
					</li>
					<li class="nav-item dropdown">
						<router-link class="nav-link" to="/topic">话题中心</router-link>
					</li>
					<li class="nav-item dropdown">
						<router-link class="nav-link" to="#">人工服务</router-link>
					</li>
					<li class="nav-item dropdown">
						<router-link class="nav-link" to="#">帮助中心</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>
<script>
export default {
	name: 'nav-self',
	data() {
		return {
			isShow: false
		};
	}
}
</script>

<style>
#nav .navbar{
	padding:0 5%;
	background-color: rgba(241, 237, 237,0.5);
	border-bottom: 1px solid rgb(224, 222, 222);
}
#nav .nav-link {
	font-size:15px;
	color:black;
}
#navbarNavDropdown {
	width:100%;
}
#navbarNavDropdown ul.left{
	float:left;
}
#navbarNavDropdown ul.right{
	float:right;
}
#navbarNavDropdown ul li .nav-link{
	padding-right:1em;
	padding-left:1em;
}
#navbarNavDropdown ul li .show{
	display: block;
}
</style>
