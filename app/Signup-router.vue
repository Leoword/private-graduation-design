<template>
	<div class="box-container"> 
		<div class="container text-center signUp">
			<div class="row">
				<div class="col-sm">
					<router-link tag="button" to="/signup/tourist">我是游客</router-link>
				</div>
				<div class="col-sm">
					<router-link tag="button" to="/signup/business">我是商户</router-link>
				</div>
				<p>提示：如果您想要享受全面的旅游服务，请选择“我是游客”按钮来进行注册；如果您想要提供全面优质的旅游服务请选择“我是商户”来进行注册，谢谢合作！</p>
			</div>
		</div>
	</div>
</template>
<style>
.signUp{
	margin-top:150px;
	width:500px;
	background:lightgray;
	padding:20px;
}
.signUp p{
	margin-top:20px;
	font-size:18px;
	text-align: center;
	width:100%;
}
.signUp .row {
	margin:20px;
	font-size:20px;
}
</style>
