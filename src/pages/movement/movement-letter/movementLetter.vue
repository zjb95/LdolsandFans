<template>
	<div class="movementLetter">
		<!-- <h3 class="movementLetter-header">{{msg}} -->
		<!-- <router-link :to="{path:'/',name: 'movementIndex'}"> -->
		 <!--   <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/left.png" onclick="window.history.go(-1)"> -->
	    <!-- </router-link></h3> -->
	    <div class="movementLetter-header">
			<router-link to="/movementIndex">
				<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/jiantouLeft.png" />
			</router-link>
			<span>私信</span>
		</div>

	    <div class="movementLetter-container">

			<!-- <div  v-for="infoArr in infoArr">
				<div class="left"></div>
				<div class="right">
				  	<p class="nickName">来自 {{infoArr.nickName}}</p>
				  	<p class="info">{{infoArr.info}}</p>
				  	<img src="../../../assets/images/movement-images/n.png">
				  	<span>{{infoArr.time}}</span>
				</div>
			</div> -->

			<router-link v-for="(infoArr,index) in infoArr" :key="index" :to="{path:'/chatMessage',name: 'chatMessage'}" tag='div'>
       	    	<div class="left"></div>
				<div class="right">
				  	<p class="nickName">来自 {{infoArr.nickName}}</p>
				  	<p class="info">{{infoArr.info}}</p>
				  	<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/n.png">
				  	<span>{{infoArr.time}}</span>
				</div>
       	     </router-link>

			<router-link to='/single' tag="div"  :key='index' v-for="(infoArr1,index) in infoArr1">
				<div class="left"></div>
				<div class="right">
				  	<p class="nickName">发给 {{infoArr1.niCheng}}</p>
				  	<p class="info">{{infoArr1.message}}</p>
				  	<span>{{infoArr1.time1}}</span>
				</div>
				
			</router-link>		
    	</div>
	    <router-view></router-view>	
	</div>
</template>
<script type="text/javascript">
export default {
  name: 'movementLetter',
  data () {
  	return {
  		msg:'私信',
  		infoArr:[
  			{
  				nickName:"大哥就是我",
  				info:"晚上三缺一,你和你媳妇儿快点过来吧!咱们先吃饭,然后搓麻到通宵!",
  				time:"刚刚",
  				
  			},
  			{
  				nickName:"大哥就是我",
  				info:"晚上三缺一,你和你媳妇儿快点过来吧!咱们先吃饭,然后搓麻到通宵!",
  				time:"刚刚",
  				
  			}
  			
  		],
  		infoArr1:[
  			{
  				time1:"4小时前",
  				niCheng:"美貌与事业并重",
  				message:"今天累不累,亲爱滴~~"

  			},
  			{
  				time1:"4小时前",
  				niCheng:"美貌与事业并重",
  				message:"今天累不累,亲爱滴~~"

  			}

  		]
    }
  }
}
</script>
<style scoped lang="less">
	.movementLetter{
	  background:#F2EEF9;
	  height:1333/50rem;		
	   .movementLetter-header{
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
        

	   .movementLetter-container{
	   		margin:28/50rem 20/50rem;
		   	&>div{
		   		margin-top:30/50rem;
					overflow:hidden;
					&>div{

						float:left;

					}
					.left{
					    width:67/50rem;
						height:67/50rem;
						background:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/txd.png') no-repeat;
						background-size:67/50rem 67/50rem;
						margin-right:16/50rem;
						

						
					}
					.right{
						width:618/50rem;
						border-bottom: 1px solid #E1DDE9;
						box-sizing:border-box;
						padding:20/50rem 12/50rem 24/50rem 22/50rem;
						color:#535353;
						font-size:32/50rem;
						background:#F2EEF9;							
						position:relative;
						p{
							color:#000000;
							font-size:28/50rem;
							padding-bottom:26/50rem;
							box-sizing:border-box;
							width:414/50rem;

						}
						.nickName{
							color:#313131;
							font-size:28/50rem;
						}
						.info{
							color:#1b1b1b;
							font-size:32/50rem;
						}
						img{
							display:block;
							width:34/50rem;
							height:34/50rem;
							position:absolute;
							right:32/50rem;
							top:61/50rem;


						}
						span{
							color:#959595;
							font-size:24/50rem;
							position:absolute;
							top:20/50rem;
							right:32/50rem;


						}

						
						

					}
						
			}			
		}
	}
	
	
</style>