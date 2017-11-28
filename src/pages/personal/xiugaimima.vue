<template>
	<div class="personal-box">
		<div class="header">
			<router-link tag='a' to='/sheZhi'><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/f-1.png"></router-link>
			<h5>修改密码</h5>
			<div class="baocun">
				<span :plain="true" @click="open2">保存</span>
			</div>
		</div>
		<div class="input">
			<input type="text" name="" class="input1" placeholder="请输入原密码">
			<input type="text" name="" class="input1" placeholder="设置新密码">
			<input type="text" name="" class="input1" placeholder="请再次确认新密码">
		</div>		
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"xiugaimima",
		data(){
			return{

			}
		},
		methods: {
			 open2() {

        this.$message({
        	duration:1000,
          message: '保存成功',
          type: 'success'
        });
      }
    }
    

}
</script>
<style  scoped lang="less">
	.personal-box{
		// background:#F2EEF9;
		height: 100%;
		// padding: 20/50rem;
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
	
	.baocun{
		display: inline-block;
	}
	.baocun>span{
		display: inline-block;
		font-size: 35/50rem;
		color: #fff;
		margin-left: 150/50rem;
	}
	.input{
		padding: 20/50rem;
		box-sizing: border-box;
	}
	.input1{
		// margin-top: 50/50rem;
		padding-left: 50/50rem;
		box-sizing: border-box;
		border: 1px solid #CDC7D9;
		outline: none;
		width: 700/50rem;
		height: 89/50rem;
		border-radius: 14/50rem;
		margin-top: 20/50rem;
		color: #000;
		font-size: 30/50rem;

	}

</style> 