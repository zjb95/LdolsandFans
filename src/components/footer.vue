<template>
	<div class="footerContainer">
		<router-link tag="div" :to="{path:'/clipsIndex'}" >
			<i class="iconfont icon-xiaohua" ></i>
			<p class='p'>片花</p>
		</router-link>
		<router-link tag="div" :to="{path:'/circleIndex'}"  >
			<i class="iconfont icon-quanzi"></i>
			<p class='p'>圈子</p>
		</router-link>
		<router-link tag="div" to="/movementIndex" >
			<i class="iconfont icon-huojian"></i>
			<p class='p'>动态</p>
		</router-link>
		<router-link tag="div" to="/personalIndex" >
			<i class="iconfont icon-wode1"></i>
			<p class='p'>我的</p>
		</router-link>
	</div>
</template>
<script type="text/javascript">
import '../../static/font/iconfont.css'
	export default{
		name:'footerIndex',
		data(){
			return{
				select:false
			}
		}
	}
</script>
<style lang="less">

.footerContainer{
	position:fixed;
	z-index:999;
	background:rgba(255,255,255,0.9);
	bottom:0;
	left:0;
	height:111/50rem;
	width:100%;
	display:flex;
	div{
		flex-grow:1;
		float:left;
		text-align:center;
		img{
			width:40/50rem;
			height:40/50rem;
			margin-top:15/50rem;
		}	
	}
}
.p{
	color:#A0A0A0;
	font-size:25/50rem;
	margin-bottom:10/50rem;
}
.active>i,.active>.p{
	color:#A54BE8;
}
</style>