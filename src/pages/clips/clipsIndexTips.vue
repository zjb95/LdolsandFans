<template>
	<div class="clipsIndexTips" v-if="show">
		<a href="javascript:" class="cancle" @click="cancles"></a>
		<h5>登录后更精彩哦!</h5>
		<router-link to='/login' tag='span'>登录</router-link>
		<router-link to='/register' tag='span'>注册</router-link>
		<p>不用注册,用社交账号直接登录吧!</p>
		<div class="loginWay">
			<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/Weixin.png">
			<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/QQ.png">
			<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/WeiBo.png">
		</div>	
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"clipsIndexTips",
		data(){
			return{
				show:true
			}
		},
		methods:{
			cancles(event){
				this.show = !this.show;

			}
		}
	}
</script>
<style scoped lang='less'>
	.clipsIndexTips{
		position:absolute;
		top:50/50rem;
		left:22.5/50rem;
		top:380/50rem;
		z-index:888;
		width:705/50rem;
		height:530/50rem;
		border-radius:10/50rem;
		margin:0 auto;
		background:#fff;
		padding:30/50rem 40/50rem;
		box-sizing:border-box;
		.cancle{
			display: inline-block;
			width:40/50rem;
			height:40/50rem;
			border-radius:50%;
			position:absolute;
			top:10/50rem;
			right:10/50rem;
			background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/cancle.png) no-repeat;
			background-size:40/50rem 40/50rem;
			&:hover{
				background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/cancle1.png) no-repeat;
			background-size:30/50rem 30/50rem;
			}
		}
		h5{
			font-size:30/50rem;
			color:#434343;
			line-height:60/50rem;
			text-align:center;
			font-weight:normal;
			margin-bottom:34/50rem;
		}
		span{
			float:left;
			width:300.5/50rem;
			height:100/50rem;
			border-radius:10/50rem;
			border:1/50rem solid #A54BE8;
			color:#A54BE8;
			display:inline-block;
			line-height:100/50rem;
			font-size:30/50rem;
			text-align:center;
			margin-left:20/50rem;
			margin-bottom:10/50rem;
			&:nth-of-type(1){
				margin-left:0;
				background:#A54BE8;
				color:#fff;
			}
			&:hover{
				background:#A54BE8;
				color:#fff;
			}
		}
		p{
			font-size:30/50rem;
			color:#a9a2b4;
			text-align:center;
			line-height:120/50rem;
		}
		.loginWay{
			padding:0 20/50rem;
			box-sizing:border-box;
			img{
				width:135/50rem;
				height:135/50rem;
				margin-right:75/50rem;
				&:nth-of-type(3){
					margin-right:0;
				}
			}
		}
	}
</style>