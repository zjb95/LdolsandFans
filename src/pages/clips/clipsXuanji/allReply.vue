<template>
	<div class="allReply">
		<h3 class="allReply-header">全部回复
          <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/left.png" onclick="window.history.go(-1)">
        </h3>
         <div class="allReply-container">

			<div  v-for="(infoArrs,index) in infoArr" :key="index">
				<div class="left"><img :src="infoArrs.icon"></div>
				<div class="right">
				  	<p class="nickName">{{infoArrs.name}}</p>
				  	<span class="time">{{Date(infoArrs.snsTime).substr(15,10)}}</span>
				  	<p class="info">{{infoArrs.description.substr(0,60)}}</p>
				  	<div class="huifu">
					  	<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/more_btn_normal.png">
					  	<p class='logo'>
					  	<a href="#" class='copy'><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/t4.png">复制</a>
					  	<a href="#" class="jubao" @click="getLogo"><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/t3.png"></a>
						</p>
					</div>				  					
				</div>
		 	</div>
		 	
		 	
		 	<div class="select" v-if="flag">
		 		<h3>请选择举报原因</h3>
		 		<p><span>暴力色情</span><span>虚假谣言</span></p>
		 		<p><span>广告骚扰</span><span>人生攻击</span></p>
		 		<p><span>违反法律法规</span><span>其他</span></p>
		 	</div>
		 	
			
		</div>
		<div class="zhezhao" v-if="flag" @click="getshowHide"></div>
		<div class="inputBox">
		 		<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/zan_btn_normal.png" class="zan">
		 		<div>
		 			<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/%E4%B8%8B%E9%83%A8-%E8%BE%93%E5%85%A5icon.png" class="pen">
		 			<input type="text" placeholder="请输入回复内容">
		 		</div>
		 		
	 	</div>
	</div>
</template>
<script>

export default {
  name: 'allReply',
  data () {
  	return {
  		infoArr:[],
  		flag:false

      
    }
 
  },
  created(){
			this.$axios.get("http://www.wwtliu.com/sxtstu/news/iqiyi_comment.php")

			.then(res => {
				// console.log(res.data.data.feeds)
				this.infoArr = res.data.data.feeds;
				console.log(this.infoArr);
				

			})
			.catch(error =>{
				// console.log(error);
			})	
			// console.log(this.$route.params.id);
		},
  methods:{

  	getLogo:function(event){
  		this.flag=!this.flag;
  		
  		
  	},
  	getshowHide:function(event){
  		this.flag=false;	
  	}


       
  }

}	
	
</script>
<style  scoped lang="less">
	.allReply{
		position:relative;
    	background:#F2EEF9;
    	.allReply-header{
	      	width:100%;
	      	height:105/50rem;
	      	background:#A54BE8;
	      	color:#F1E7FB;
	      	font-size:36/50rem;
	      	text-align:center;
	      	line-height:105/50rem;
	      	img{
		      	display:inline-block;
		      	width:21/50rem;
		        height:37/50rem;
		        margin-top:32/50rem;
		        margin-left:40/50rem;
		        float:left;
      		}
    	}
    	.allReply-container{
	   		margin:28/50rem 20/50rem;
	   		position:relative;
		   	&>div{
		   		margin-top:15/50rem;
				overflow:hidden;
				&>div{
					float:left;
				}
				.left{
					img{
						width:75/50rem;
						height:75/50rem;
						border-radius:50%;
						margin-right:16/50rem;
					}	
				}
				.right{
					width:618/50rem;
					border-bottom: 1px solid #E1DDE9;
					box-sizing:border-box;
					padding:0 12/50rem 24/50rem 0;
					color:#535353;
					font-size:32/50rem;
					background:#F2EEF9;	
					position:relative;
					.time{
						position: relative;
						left: -5/50rem;
						top:-5/50rem;
					}
					p{
						color:#959595;
						font-size:28/50rem;
						width:550/50rem;
					}
					.nickName{
						color:#a54be8;
						font-size:28/50rem;
					}
					.info{
						margin-top: 10/50rem;
						color:#1b1b1b;
						font-size:32/50rem;
						padding-top:15/50rem;
						box-sizing:border-box;
					}
					.huifu{
						width:77/50rem;
						height:46/50rem;
						img{
							width:77/50rem;
							height:46/50rem;
							position:absolute;
							right:32/50rem;
							top:35/50rem;
						}
						&:hover .logo{
							display:block;
						}
						.logo{
							display:none;
							width:300/50rem;
							height:110/50rem;
							border-radius:5/50rem;
							background:#493D52;
							padding:15/50rem;
							box-sizing:border-box;
							position:absolute;
							top:0;
							right:120/50rem;
							overflow:hidden;
							&>a{
								display:block;
								line-height:80/50rem;
								background:#6C597A;
								border-radius:5/50rem;
								text-align:center;
								color:#FEFEFE;
								font-size:26/50rem;
								float:left;
								position:relative;
							}
							.copy{
								width:175/50rem;
								height:80/50rem;
								margin-right:15/50rem;
								img{
									position:absolute;
									width:28/50rem;
									height:33/50rem;
									top:20/50rem;
									left:20/50rem;
								}
							}
							.jubao{
								width:80/50rem;
								height:80/50rem;
								img{
									position:absolute;
									width:29/50rem;
									height:35/50rem;
									top:25/50rem;
									left:25/50rem;					
								}								
							}
						}
					}
					span{
						color:#959595;
						font-size:28/50rem;
						position:absolute;
						top:38/50rem;
						left:65/50rem;
					}
				}
			}
		}
		.select{
			position:absolute;
		    margin-left:20/50rem;
		    margin-right:20/50rem;
			width:666/50rem;
			height:462/50rem;
			background:#fff;
			border-radius:20/50rem;
			padding-top:34/50rem;
			left:0;
			top:200/50rem;
			z-index:10;
			h3{
				text-align:center;
				font-size:30/50rem;
				color:#ccc;
				vertical-align:middle;
			}
			p{
				padding:0 0 78/50rem 74/50rem;
				span{
					text-align:left;
					font-size:32/50rem;
					color:#1b1b1b;
					padding-right:180/50rem;
					&:hover{
						color:#a54be8;	
					}	
				}
			}
		}
		.zhezhao{
			width:100%;
			height:1333/50rem;
			background:rgba(0,0,0,0.3);
			position:absolute;
			top:0;
			left:0;
		}
		.inputBox{
			position: fixed;
			bottom: 0;
			height:100/50rem;
			
			width:100%;
			background: #F2EEF9;
			
			&>img,&>div{
				float:left;
			}
			.zan{
				display:block;
				width:36/50rem;
				height:36/50rem;
				border:1px solid #87848C;
				padding:10/50rem;
				border-radius:50%;
				position:absolute;
				top:20/50rem;
				left:23/50rem;
			}
			&>div{
				position:absolute;
				height:64/50rem;
				width:502/50rem;
				top:6/50rem;
				left:110/50rem;
				.pen{
					position:absolute;

					display:block;
					width:36/50rem;
					height:36/50rem;
					left:20/50rem;
					top:28/50rem;
				}
				input{
					width:500/50rem;
					height:62/50rem;
					color:#7b7781;
					font-size:28/50rem;
					border:1/50rem solid #CCC7D5;
					padding-left:80/50rem;
					border-radius:10/50rem;
					border-box:border-box;
					outline: none;
				}
			}
		}
    }
</style>