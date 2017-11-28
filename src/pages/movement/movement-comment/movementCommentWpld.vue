
<template>
 <div class="movementCommentWpld">
	<div  v-for="infoArr in infoArr">
		<div class="left"></div>
		<div class="right">
			<div class=""><p>{{infoArr.nickName}}</p>{{infoArr.info}}<span>{{infoArr.time}}</span></div>
			<p><span>{{infoArr.niCheng}}:</span>{{infoArr.message}}</p>
		</div>			
	</div>		

 </div>
	

	
</template>
<script type="text/javascript">
export default {
  name: 'movementCommentWpld',
  data () {
  	return {
  		msg:'评论',
  		infoArr:[
  			{
  				nickName:"为我女神范儿",
  				info:"还不错最近",
  				time:"2014/03/22",
  				niCheng:"脑残粉",
  				message:"妹儿,最近怎么样啊?哪天来找我吧"

  			},
  			{
  				nickName:"为我女神范儿",
  				info:"还不错最近",
  				time:"2014/03/22",
  				niCheng:"脑残粉",
  				message:"妹儿,最近怎么样啊?哪天来找我吧"

  			},
  			{
  				nickName:"为我女神范儿",
  				info:"还不错最近",
  				time:"2014/03/22",
  				niCheng:"脑残粉",
  				message:"妹儿,最近怎么样啊?哪天来找我吧"

  			}


  		]
  		

    }
  }
}
 
</script>
<style scoped lang="less">
	.movementCommentWpld{
		border-radius:10/50rem;	
		margin:28/50rem 20/50rem;
		width:710/50rem;
		height:65/50rem;
		
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

				
				border-bottom: 1px solid #E1DDE9;
				box-sizing:border-box;
					
				&>div{
					padding:20/50rem 12/50rem 24/50rem 44/50rem;
					box-sizing:border-box;
					color:#535353;
					font-size:32/50rem;
					background:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/nrk.png')no-repeat;
					background:cover;
					background-size:618/50rem 147/50rem;

					border-radius:10/50rem;
					position:relative;
					p{
						color:#000000;
						font-size:28/50rem;
						padding-bottom:26/50rem;
						box-sizing:border-box;

					}
					span{
						color:#959595;
						font-size:24/50rem;
						position:absolute;
						top:20/50rem;
						right:12/50rem;


					}

				}
				&>p{
					font-size:28/50rem;
					color:#313131;
					background:#FFF;
					padding:22/50rem 95/50rem 22/50rem 22/50rem;
					box-sizing:border-box;
					span{
						font-size:28/50rem;
							color:#B87CEC;
					}

			    }
					
			}			
			
		}
	}
       
          	
</style>