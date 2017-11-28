<template>
	<div class="personal-box">
		<div class="header">
			<a onclick='window.history.go(-1)'><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/f-1.png"></a>
			<h5>明星认证</h5>
		</div>
		<div class="hid">
		<div class="fit">
			<input type="text" name="" class="input-top" placeholder="请输入您的真实姓名">				
			<input type="text" name="" class="input-top" placeholder="请输入您的联系方式">
			</div>
			<div class="photo">
				<span>请上传如左图所示的照片</span>	
				<div class="photo-left">
					<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/示例照片.png">
				</div>
				<div class="photo-right">
					<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/s-2.png">
				</div>
			</div>
			<!-- <img class="line" src="../../assets/images/personal-images/line.png"> -->
			<div class="content">
				<p>请填写您所参演过的剧/栏目名称及所饰演角色</p>
				<span>至少添加一项,也可添加多个</span>
				<div class="come">
					<p>来自房上的你</p>
				</div>
				<div class="cometwo">
					<p>房梁仙子</p>
				</div>
				<div class="comethree">
					<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/j-2.png">
				</div>
				<input type="text" name="" class="comefoue" placeholder="剧/栏目名称">
				<input type="text" name="" class="comefive" placeholder="饰演角色">
				
				<div class="comesix">
					<p>添加一条新的</p>
				</div>
			</div>
			<div class="sub">
				<span>点击提交表示同意</span>
				<a href="">保密协议</a>	
			</div>
			<div class="submit">
				<span :plain="true" @click="open2">提交
					
			</span>
			</div>
		</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"personalStar",
		data(){
			return{

			}
		},
		methods: {
			 open2() {
        this.$message({
        	duration:1000,
          message: '提交成功',
          type: 'success'
        });
      }
    }
	}
</script>
<style  scoped lang="less">
	.line{
		width: 100%;
	}
	.personal-box{
		background: #F2EEF9;
	}
	.hid{
		padding: 20/50rem;
	}
	.fit{
		padding:20/50rem;
		box-sizing:border-box;
	}
	.header{
		height:105/50rem; 
		width:100%;
		background:#A54BE8;
	}
	.header>a>img{
		height:35/50rem;
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
	.input-top{
		width:100%;
		height:85/50rem;
		border:1px solid #D6D0DF;
		margin:20/50rem auto;
		border-radius:7px;
		background: #fff;
		font-size: 30/50rem;
		outline: none;
		padding-left: 50/50rem;
		box-sizing: border-box;
	}
	.input-top>span{
		font-size:30/50rem;
		margin-left:20/50rem;
		color:#a9a2b4;
	}
	.input-top>b{
		font-size:30/50rem;
		font-weight:normal;
		color:#A54BE8;
		margin-left:5.1rem;
	}
	.input-bottom{
		width:100%;
		height:85/50rem;
		border:1px solid #D6D0DF;
		margin:20/50rem auto;
		border-radius:7px;
		background: #fff;
	}
	.input-bottom>span{
		font-size:30/50rem;
		margin-left:20/50rem;
		color:#a9a2b4;
	}
	.input-bottom>b{
		font-size:30/50rem;
		font-weight:normal;
		color:#A54BE8;
		margin-left:5.1rem;
	}
	.photo{
		width:100%;
		height:390/50rem;
		background:#E5E0ED;
		border-radius:7px;
	}
	.photo>span{
		color:#313131;
		font-size:28/50rem;
		margin-left:18/50rem;
		display:block;
		padding-top:24/50rem;
		box-sizing:border-box;
	}
	.photo-left{
		display:inline-block;
	}
	.photo-left>img{
		width:190/50rem;
		height:260/50rem;
		margin-left:62/50rem;
		margin-top:26/50rem;
	}
	.photo-right{
		display:inline-block;
	}
	.photo-right>img{
		width:190/50rem;
		height:260/50rem;
		margin-left:114/50rem;
		margin-top:26/50rem;
	}
	.content{
		border-top: 1px/50rem solid #cccccc;
		margin-top: 22/50rem;
	}
	.content>p{
		color:#313131;
		font-size:28/50rem;
		font-weight: bold;
		margin-top: 22/50rem;
	}
	.content>span{
		font-size:28/50rem;
		color:#A54BE8;
		margin-top: -3px;
		display: block;
		font-weight: bold;
	}
	.come{
		width: 365/50rem;
		height: 80/50rem;
		border: 1px solid #D0CADB;
		border-radius: 14/50rem;
		margin-top: 24/50rem;
		display:inline-block;
		font-size: 28/50rem;
		font-weight: bold;

	}
	.come>p{
		margin-left: 20/50rem;
		margin-top: 18/50rem;
		color: #313131;
	}
	.cometwo{
		width: 195/50rem;
		height: 80/50rem;
		border: 1/50rem solid #D0CADB;
		border-radius: 14/50rem;
		margin-top: 24/50rem;
		display:inline-block;
		font-size: 28/50rem;
		font-weight: bold;
	}
	.cometwo>p{
		margin-left: 20/50rem;
		margin-top: 18/50rem;
		color: #313131;
	}
	.comethree{
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		position: relative;
		right: -30/50rem;
		top: 15/50rem;
	}
	.comethree>img{
		width: 50/50rem;
		height: 50/50rem;
	}
	.comefoue{
		width: 420/50rem;
		height: 80/50rem;
		border: 1px solid #D0CADB;
		border-radius: 14/50rem;
		margin-top: 24/50rem;
		display:inline-block;
		font-size: 28/50rem;
		font-weight: bold;
		background: #fff;
		padding-left: 50/50rem; 
		outline: none;
		box-sizing: border-box;
	}
	.comefoue>p{
		margin-left: 20/50rem;
		margin-top: 18/50rem;
		color: #a9a2b4;
	}
	.comefive{
		width: 240/50rem;
		height: 80/50rem;
		border: 1px solid #D0CADB;
		border-radius: 14/50rem;
		margin-top: 24/50rem;
		display:inline-block;
		font-size: 28/50rem;
		font-weight: bold;
		background: #fff;
		padding-left: 50/50rem; 
		outline: none;
		box-sizing: border-box;
	}
	.comefive>p{
		margin-left: 20/50rem;
		margin-top: 18/50rem;
		color: #a9a2b4;
	}
	.comesix{
		margin-top: 30/50rem;
		width: 100%;
		height:80/50rem;
		background: url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/t-2.png) no-repeat;
		background-size: 100% 80/50rem;
	}
	.comesix>p{
		font-size: 28/50rem;
		margin-left: 5.4rem;
		margin-top: -0.5rem;
		display: inline-block;
		color: #a9a2b4;
	}
	.sub{
		margin-top: 165/50rem;
		margin-left: 165/50rem;
	}
	.sub>span{
		color: #a9a2b4;
		font-size: 28/50rem;
	}
	.sub>a{
		font-size: 28/50rem;
		color: #A54BE8;
	}
	.submit{
		width: 100%;
		height:80/50rem;
		background: #A54BE8;
		border-radius: 10/50rem;
		margin-top: 70/50rem;
	}
	.submit>span{
		color: #fff;
		font-size: 28/50rem;
		margin-left: 320/50rem;
	}
</style>
