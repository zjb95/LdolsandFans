<template>
 <div class="movementComment">
	<!-- <h3 class="movementComment-header">评论 -->
	<!-- <router-link :to="{path:'/movementIndex'}">
		<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/left.png">
	</router-link> -->
	<!-- </h3> -->
	<div class="movementComment-header">
		<router-link to="/movementIndex">
			<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/jiantouLeft.png" />
		</router-link>
		<span>评论</span>
	</div>

	
	<div class="movementComment-container">
		<p>
			<!-- <a  :class="{active:flag}" @click='clickEventL'>我评论的</a>
			<a  :class="{active:!flag}" @click='clickEventR'>评论我的</a> -->

			<router-link  :to="{path:'wpld',
			name:'movementCommentWpld'}">我评论的</router-link>

			<router-link  :to="{path:'plwd',
			name:'movementCommentPlwd'}">评论我的</router-link>

		</p>
		
		

    </div>
	<router-view></router-view>	
 </div>

	
</template>
<script type="text/javascript">
export default {
  name: 'movementComment',
  data () {
  	return {
 

    }
  }

  
}
 
</script>
<style scoped lang="less">
    .movementComment{ 	
    	over-flow:hiden;   	
	   .movementComment-header{
			width:100%;
			height:105/50rem;
			line-height:105/50rem;
			background:#A54BE8;
			text-align:center;
			img{
				position:absolute;
				left:38/50rem;
				top:34/50rem;
				width:21/50rem;
				height:37/50rem;	
			}
			span{
				color:#fff;
				font-size:36/50rem;
			}
        }
        	
		.movementComment-container{
			border-radius:10/50rem;	
			margin:28/50rem 20/50rem;
			width:710/50rem;
			height:65/50rem;
			&>p{
				overflow:hidden;
				border-radius:10/50rem;
				&>a{
					display:block;
					width:355/50rem;
					height:65/50rem;
					line-height:65/50rem;
					font-size:26/50rem;
					color:#A54BE8;
					background:#F2EEF9;
					border: 2px solid #A54BE8;
					box-sizing:border-box;				
					text-align:center;
					float:left;
				
				}
				.router-link-active{
					color:#FFFFFF;
					background:#A54BE8;

				}
			}
			
		}
       
          
    }	
</style>