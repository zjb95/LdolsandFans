<template>
	<div class="personal-box">
		<div class="header">
			<router-link  to='/personalIndex'><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/f-1.png"></router-link>
			<h5>设置</h5>
			
		</div>
		<div class="news">
			<span>新信息提醒</span>
			<el-switch
			  v-model="value2"
			  class="butten"
			  active-color="#A44BE8"
			  inactive-color="#999">
			</el-switch>
		</div>
		<router-link tag='div' to='/xiugaimima' class="pass">
					<span>修改密码</span>
					<img class="jiantou" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png">
		</router-link>
		<router-link tag='div' to='/xiugaibangding' class="bind">
					<span>修改绑定</span>
					<img class="jiantou" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png">
		</router-link>
		<router-link tag='div' to='/' class="quit">
					<span>退出登录</span>
		</router-link>
		<div class="back"></div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"sheZhi",
		data(){
			return{
					value1: true,
        			value2: true
			}
		}
	}
</script>
<style  scoped lang="less">
	.personal-box{
		background:#F2EEF9;
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
	.news{
		width: 100%;
		height:100/50rem;
		background: #fff;
		border-bottom: 1px solid #E3E0E9;
		border-top: 1px solid #E3E0E9;
		margin-top: 35/50rem;
	}
	.news>span{
		font-size: 40/50rem;
		margin-top: 0.4rem;
		display: inline-block;
		font-weight: 600;
        margin-left: 42/50rem;

	}
	.pass{
		width:100%;
		height:100/50rem;
		border-bottom: 1px solid #E3E0E9;
		border-top: 1px solid #E3E0E9;
		margin-top: 50/50rem;
		background:#fff;
	}
	.pass>span{
		font-size: 40/50rem;
		font-weight: 600;
		margin-left: 42/50rem;
	}
	.pass>img{
		width: 20/50rem;
		height: 33/50rem;
		margin-top: 35/50rem;
		margin-left: 470/50rem;
	}
	.bind{
		width:100%;
		height:100/50rem;
		border-bottom: 1px solid #E3E0E9;
		background:#fff;
	}
	.bind>span{
		font-size: 40/50rem;
		font-weight: 600;
		margin-left: 42/50rem;
	}
	.bind>img{
		width: 20/50rem;
		height: 33/50rem;
		margin-top: 35/50rem;
		margin-left: 470/50rem;
	}
	.quit{
		width:100%;
		height:100/50rem;
		border-bottom: 1px solid #E3E0E9;
		background:#fff;
		margin-top: 516/50rem;
	}
	.quit>span{
		font-size: 40/50rem;
		font-weight: 600;
		margin-left: 302/50rem;
		margin-top: 20/50rem;
		color: #e43c3c;
		display: inline-block;
	}
	.back{
		height: 215/50rem;
	}
	.butten{
		margin-left: 370/50rem;
	}
</style>
