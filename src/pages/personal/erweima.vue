<template>
	<div class="personal-box">
		<div class="header">
			<a onclick='window.history.go(-1)'><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/f-1.png"></a>
			<h5>二维码</h5>
		</div>
		<div class="erweima">
			<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/timg.jpg">
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"fanKui",
		data(){
			return{

			}
		}
	}
</script>
<style  scoped lang="less">
	.personal-box{
	
		height: 100%;
	}
	.header{
		height:105/50rem; 
		width:100%;
		background:#A54BE8;
	}
	.header>a>img{
		height:40/50rem;
		width:20/50rem;
		margin-top:0.7rem;
		margin-left:40/50rem;
	}
	.header>h5{
		display:inline-block;
		color:#fff;
		font-weight:normal;
		margin-left:220/50rem;
	}
	.header>span{
		color: #fff;
		font-size: 38/50rem;
		margin-left: 160/50rem;
	}
	.erweima>img{
		width: 750/50rem;
		height: 750/50rem;
		margin-top: 200/50rem;
	}

</style>