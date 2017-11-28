<template>
	<div class="personal-box">
		<div class="header">
			<router-link tag='a' to='/ziLiao'><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/f-1.png"></router-link>
			<h5>个性签名</h5>
			<span :plain="true" @click="open2">保存
					
			</span>
		</div>
		<textarea placeholder="30字">
			
		</textarea>
		<div class="fit">
			
		</div>		
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"bianjinicheng",
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
	.fit{
		background:#F2EEF9; 
		height: 1075/50rem;
	}
	textarea{
		width: 100%;
		height: 150/50rem;
		border: none;
		outline: none;
		padding-left: 30/50rem;
		margin-top: 30/50rem;
		box-sizing: border-box;
	}

</style>