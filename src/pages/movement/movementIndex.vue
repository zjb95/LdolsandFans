
<template>
  <div class="movementIndex">
       <h3 class="movementIndex-header">动态</h3>
       <div class="movementIndex-container">
       	  <ul class="movementIndex-list">
       	    <router-link :to="{path:'/movementComment'}" tag='li'>
       	    <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/comment_icon.png">
       	     评论</router-link>

       	    <router-link :to="{path:'/movementLetter',name: 'movementLetter' }" tag='li'>
            <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/msg_icon.png">
       	    私信</router-link>

       	    <router-link :to="{path:'/movementAttention',name: 'movementAttention' }" tag='li'>
            <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/eyes_icon.png">
       	    关注</router-link> 
       	  </ul>

       	  <ul class="movementIndex-list">

       	  	<router-link :to="{path:'/movementHistory',name: 'movementHistory' }" tag='li'>
            <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/history_icon.png">
       	    播放历史</router-link> 

       	    <router-link :to="{path:'/movementScan',name: 'movementScan' }" tag='li'>
            <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/scan_icon.png">
       	    扫一扫</router-link>
       	  </ul>

       	  <ul class="movementIndex-list">
       	  	<router-link :to="{path:'/movementSystem',name: 'movementSystem' }" tag='li'>
            <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/air_icon.png">
       	   	系统消息</router-link> 
       	  </ul>
       	  
       </div>
       <router-view></router-view>
   		<div class="up_bottom"></div>
		<FooterIndex/>
  </div>
 
</template>

<script>
import FooterIndex from '../../components/footer.vue'
export default {
  name: 'movementIndex',
  data () {
    return {

      
    }
  },
  components:{
  	FooterIndex
  }
}
</script>


<style scoped lang="less">
	.up_bottom{
		height:111/50rem;
	}
   
	.movementIndex{
		width:100%;
		height:1333/50rem;
		background:#F2EEF9;
		.movementIndex-header{
			width:100%;
			height:105/50rem;
			background:#A54BE8;
			color:#F1E7FB;
			font-size:36/50rem;
			text-align:center;
			line-height:105/50rem;

		}
		.movementIndex-container{
			margin-top:30/50rem;
			.movementIndex-list{
				background:#FFFFFF;
				margin-bottom:40/50rem;
				border-top: 2px solid #E8E5ED;
				border-bottom: 2px solid #E8E5ED;
				box-sizing:border-box;
				over-flow:hiden;
				li{
					
					height:105/50rem;
					line-height:105/50rem;
					margin:0 20/50rem 0 30/50rem;
					padding-left:16/50rem;
					padding-right:10/50rem;
					box-sizing:border-box;
					font-size:36/50rem;
						color:#1b1b1b;
					&:nth-child(1),&:nth-child(2){
						border-bottom:1px solid #E8E5ED;
						box-sizing:border-box;
					}
					&:after{
						content:"";
						display:inline-block;
						width:18/50rem;
  						height:32/50rem;
  						margin-top:38/50rem;
  						background:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/right.png') no-repeat;
  						background-size:18/50rem 32/50rem;
  						float:right;

					}
					
					a{
						
						font-size:36/50rem;
						color:#1b1b1b;
						
					}
					img{

						width:50/50rem;
						height:40/50rem;
						padding-right:32/50rem;
						vertical-align: middle;					
					}

				}

			}
			&:nth-child(2){
				li:last-child{
					border-bottom:none;
				}
			}
		
		}
	}

</style>
