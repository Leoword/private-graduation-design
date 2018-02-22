<template>
	<router-view></router-view>
</template>

<script>
export default {
	name: 'app'
}
</script>

<style>
.mainpage {
	width:100%;
	height:100%;
	background-color:rgba(0,230,0,0.3);
}
.mainpage .content{
	width:75%;
	margin:0 auto;
}
.mainpage .head {
	width:100%;
}
.mainpage .head img {
	width:100%;
}
.mainpage nav ol{
	background: rgba(0, 0, 0, 0);
	border-bottom:1px solid rgba(255, 255, 255, 0.5); 
}
.mainpage .body{
	width:100%;
	height:1000px;
	margin-bottom:20px;
	
}
.mainpage .body .left{
	width:25%;
	height: 100%;
	float: left;
	margin-right:5%;
	border:1px solid #000000;
	padding-top: 10px;
}
.mainpage .body .right{
	width:70%;
	height: 100%;
	float: right;
	border:1px solid #000000;
	padding: 30px;
}
.mainpage .body .on {
	width:100%;
	height:30px;
	margin:5px 0;
	font-size:20px;
	text-align: center;
	line-height: 30px;
	background-color:rgba(0,230,0,0.3);
}
.mainpage .body .item {
	width:100%;
	height:35px;
	margin:5px 0;
	line-height: 35px;
	text-align: center;
}
.signout{
	margin-top:10px;
}
</style>