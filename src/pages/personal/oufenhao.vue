<template>

	<div class="personal-box">
		<div class="header">
			<router-link tag='a' to='/ziLiao'><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/f-1.png"></router-link>
			<h5>编辑偶粉号</h5>
			<span :plain="true" @click="open2">保存
					
			</span>
		</div>
		<input type="text" name="" class="con" placeholder="15104595566">		
			<img class="dont" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/1-2.png">
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
          message: '提交成功',
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
		margin-left:200/50rem;
	}
	.header>span{
		color: #fff;
		font-size: 38/50rem;
		margin-left: 140/50rem;
		width: 100/50rem;
	}
	.con{
		background: #fff;
		margin-top: 50/50rem;
		width: 100%;
		height: 100/50rem;
		padding-left: 30/50rem;
		box-sizing: border-box;
		padding-top: 10/50rem;
		outline: none;
		border: 1px solid #CDC7D9;
	}
	.dont{
		width: 40/50rem;
		height: 40/50rem;
		position: relative;
		top: -80/50rem;
		left: 280/50rem;
		margin-left: 390/50rem;
	}
	.fit{
		background:#F2EEF9; 
		height: 1075/50rem;
	}
</style>