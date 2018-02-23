<template>
	<div id="mainPage">
		<div class="container">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div id="navbarNavDropdown">
					<ul class="navbar-nav left">
						<li class="nav-item">
							<router-link class="nav-link" to="#">登录 | 注册</router-link>
						</li>
					</ul>
					<ul class="navbar-nav right">
						<li class="nav-item">
							<router-link class="nav-link" to="#">商城</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="#">个人主页</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" to="#">游记</router-link>
						</li>
						<li class="nav-item dropdown">
							<router-link class="nav-link" to="#">论坛</router-link>
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
			<div class="input-group">
				<input type="text" class="form-control" placeholder="请输入目的地/类型关键词等">
				<div class="input-group-append">
					<button class="btn btn-success" type="button">搜索</button>
				</div>
			</div>
			<div class="recommend">
				<h1 class="text-center">今日推荐</h1>
				<div class="cardBar">
					<div class="card">
						<img class="card-img-top" alt="Card image cap">
						<div class="card-body">
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="recommend shopping">
				<h1 class="text-center">商城精品</h1>
				<div class="cardBar">
					<div class="card">
						<img class="card-img-top" alt="Card image cap">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
				<router-link tag="button" class="btn btn-lg btn-secondary" to="#">查看更多商品</router-link>
			</div>
			<div class="recommend">
				<h1 class="text-center">热门游记和话题</h1>
				<div class="cardBar">
					<div class="card">
						<img class="card-img-top" alt="Card image cap">
						<div class="card-body">
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
					</div>
				</div>
				<router-link tag="button" class="btn btn-lg btn-secondary" to="#">查看更多游记</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	beforeCreated() {
		
	}
}
</script>
<style>
#mainPage{
	line-height: 100%;
}
#mainPage .input-group {
	width:40%;
	margin:30px auto;
}
#mainPage .input-group input{
	border-color: green;
}
#mainPage .recommend{
	width:100%;
	padding:40px 5%;
}
#mainPage .recommend .btn {
	margin: 0 auto;
	display: block;
}
#mainPage .recommend .cardBar {
	height:600px;
}
#mainPage .shopping h1{
	color:rgb(255,255,255);
}
#mainPage .shopping{
	background-color: lightgreen;
}
#mainPage h1{
	color:rgb(122,122,122);
	margin-bottom:30px;
}
#mainPage .container {
	margin:0;
	padding:0;
	width:1349px;
	max-width:1349px;
}
#mainPage .navbar{
	padding:0 5%;
	background-color: rgba(241, 237, 237,0.5);
	border-bottom: 1px solid rgb(224, 222, 222);
}
#mainPage .nav-link {
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
#mainPage .card{
	width:23%;
	margin:1%;
	float: left;
}
</style>

