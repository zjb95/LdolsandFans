<template>
	<div class="personal-box">
		<div class="header">
			<a onclick='window.history.go(-1)' ><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/f-1.png"></a>
			<h5>意见反馈</h5>
			<span :plain="true" @click="open2">保存
					
			</span>
		</div>
		<div>
			<textarea placeholder="请输入您的宝贵意见...">
				
				
			</textarea>
		</div>
		<div class="fit">
				您的支持和建议将是我们前进的动力!
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"fanKui",
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
	.header>span{
		color: #fff;
		font-size: 38/50rem;
		margin-left: 160/50rem;
	}
	textarea{
		width: 100%;
		height: 1140/50rem;
		padding-left: 50/50rem;
		padding-top: 30/50rem;
		box-sizing: border-box;
		font-size: 28/50rem;
		border: none;
		outline: none;
	}
	.fit{
		width: 100%;
		height: 75/50rem;
		font-size: 24/50rem;
		color: #b5b0bf;
		line-height: 75/50rem;
		text-align: center;
	}

</style>