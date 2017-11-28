<template>
	<div class="app-box" v-if="show">
		<div class="hidden hide" ></div>
		<div class="app-top">
			<div  class="app-mingxing" @click='getwoman'>
				<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/1-1.png">
				<p>{{woman}}</p>
			</div>
			<div  class="app-zhipianfang" @click='getman'>
				<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/2-1.png">
				<p>{{man}}</p>
			</div>
		</div>
		<div class="app-bottom" @click="cancle">
			<span>取消</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"xingbie",
		data(){
			return{
				show:true,
				change:true,
				woman:'女神',
				man:'型男'
			}
		},
		methods:{
			cancle(event){
				this.show = false;
				this.change =!this.change;
				this.$emit("showed",this.show);
			},
			getwoman(event){
				this.show=false;
				this.$emit('getwoman',this.woman);
				this.$emit("showed",this.show);
			}
			,
			getman(event){
				this.show=false;
				this.$emit('getman',this.man);
				this.$emit("showed",this.show);
			}
		}
	}
</script>
<style scoped lang="less">
	.app-box{
		width: 705/50rem;
		padding: 20/50rem;
		box-sizing: border-box;
		position: absolute;
		top: 930/50rem;
		left: 20/50rem;
		z-index: 666;
		.hidden{
			width: 742/50rem;
			height: 1323/50rem;
			background: rgba(0, 0, 0, 0.5);
			position: absolute;
			top: -950/50rem;
			left: -18/50rem;
			z-index: -1;
		}
		.hide{
			block:none;
		}
	}
	.app-top{
		width: 100%;
		height: 230/50rem;
		background: #fff;
		border-radius: 14/50rem;
	}
	
	.app-mingxing{
		width: 45%;
		display: inline-block;
	}
	.app-zhipianfang{
		width: 45%;
		display: inline-block;
	}
	.app-mingxing>img,.app-zhipianfang>img{
		width: 120/50rem;
		height: 115/50rem;
		margin-top: 24/50rem;
	}
	.app-mingxing>img{
		margin-left: 110/50rem;
	}
	.app-zhipianfang>img{
		margin-left: 2.5rem;
	}
	.app-mingxing>p,.app-zhipianfang>p{
		font-size: 30/50rem;
		color: #434343;
		margin-left: 2.7rem;
	}
	.app-zhipianfang>p{
		margin-left: 3.2rem;
	}
	.app-bottom{
		width: 100%;
		height: 102/50rem;
		background: #fff;
		border-radius: 14/50rem;
		margin-top: 20/50rem;
	}
	.app-bottom>span{
		color: #A54BE8;
		font-size:40/50rem;
		margin-top: 30/50rem;
		margin-left: 305/50rem;
	}
</style>