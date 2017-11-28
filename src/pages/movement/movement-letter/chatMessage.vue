<template>
	<div class="chatMessage">
		<h3 class="chatMessage-header">大哥就是我
		<!-- <router-link :to="{path:'/',name: 'movementIndex'}"> -->
		   <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/left.png" onclick="window.history.go(-1)">

		   <a @click="getBox"></a>
	    <!-- </router-link> --></h3>

	    <div class="chatMessage-container">
			<div class="chatMsg" v-for="infoArr in infoArr" v-if="infoArr.toggle">
				<div class="left"></div>
				<div class="right">
					<div class="">{{infoArr.info}}<span>{{infoArr.time}}</span></div>
				</div>			
			</div>
			<div class="replyMsg" v-for="infoArr1 in infoArr1" v-if="infoArr1.toggle">
				<div class="left"></div>
				<div class="right">
					<div class="">{{infoArr1.info1}}<span>{{infoArr1.time1}}</span></div>
				</div>			
			</div>		

 		</div>
 		<div class="title" v-if="showHidde">您已屏蔽此人的会话</div>
 		<div class="inputBox">
		 		<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/photo-1.png" class="photo">
		 		<input type="text">
		 		
		</div>
		<div class="box" v-if="flag">
			<p @click="getMask"><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/z1.png">屏蔽此人</p>
			<p @click="getClear"><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/z2.png">清空聊天</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				infoArr:[{
				toggle:true,
  				info:"晚上三缺一,你和你媳妇儿快点过来吧!咱们先吃饭,然后搓麻到通宵!",
  				time:"1分钟前",
  				}],
  				infoArr1:[{
  				toggle:true,
  				info1:"收到!必须的!",
  				time1:"刚刚",
  				}],
  				flag:false,
  				showHidde:false
				
			}
		},
		methods:{
		getBox:function(event){
  		this.flag=!this.flag;	
  		},
  		getClear:function(event){
  			for(var i =0;i<this.infoArr.length;i++){
  				this.infoArr[i].toggle=!this.infoArr[i].toggle;
  				for(var j =0;j<this.infoArr1.length;j++){
  				this.infoArr1[j].toggle=!this.infoArr1[j].toggle;
  				}
  			}		

  		},
  		getMask:function(event){
  		this.showHidde=!this.showHidde;	
  		}
	  }
	}
</script>
<style lang="less" scoped>
	.chatMessage{
	  background:#ffffff;
	  height:1333/50rem;
	  position:relative;		
	   .chatMessage-header{
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
			a{
				display:inline-block;
				width:7/50rem;
  				height:39/50rem;
				background:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/more.png')no-repeat;
				background-size:7/50rem 39/50rem;
				margin-top:32/50rem;
  				margin-right:40/50rem;
  			    float:right;

			}
        }

        .chatMessage-container{
		border-radius:10/50rem;	
	    height:1000/50rem;
		margin:30/50rem 0 46/50rem 20/50rem;
		&>div{
			overflow:hidden;	
		}
		.chatMsg{
			float:left;
			overflow:hidden;
			.left{
			width:67/50rem;
			height:67/50rem;
			float:left;
			background:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/txd.png') no-repeat;
			background-size:67/50rem 67/50rem;
			margin-right:14/50rem;
			margin-top:25/50rem;
					
			}
			.right{
				float:left;
				width:400/50rem;
				height:230/50rem;
				margin-right:144/50rem;	
				position:relative;
				&>div{
					padding:20/50rem 0  24/50rem 44/50rem;
					box-sizing:border-box;
					color:#626262;
					font-size:32/50rem;
					background:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/nrk.png')no-repeat;
					background-size:400/50rem 230/50rem;
					span{
						color:#959595;
						font-size:20/50rem;
						position:absolute;
						bottom:0;
						right:120/50rem;

					}

				}
					
			}			
		}

		.replyMsg{
			float:right;
			overflow:hidden;
			margin-top:46/50rem;
			.left{
			float:right;
			width:67/50rem;
			height:67/50rem;
			background:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/txd.png') no-repeat;
			background-size:67/50rem 67/50rem;
			margin-left:14/50rem;
			margin-top:5/50rem;
					
			}
			.right{
				width:320/50rem;
				height:140/50rem;
				float:right;
				margin-left:144/50rem;	
				position:relative;
				&>div{
					padding:20/50rem 0  24/50rem 44/50rem;
					box-sizing:border-box;
					color:#ffffff;
					font-size:32/50rem;
					background:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/d2.png')no-repeat;
					background-size:320/50rem 76/50rem;
					span{
						color:#959595;
						font-size:20/50rem;
						position:absolute;
						bottom:0;
						right:120/50rem;

					}

				}
					
			}
		}
	}
	.title{
		width:100%;
		background:#F2EEF9;
		font-size:28/50rem;
		color:red;
		text-align:center;
		padding-top:30/50rem;
	}
	.inputBox{
		height:152/50rem;
		background:#F2EEF9;
			&>img,&>div{
				float:left;
			}
				.photo{
					display:block;
					width:49/50rem;
					height:40/50rem;
					margin:55/50rem 22/50rem 0 24/50rem;

				}
				&>input{
				width:600/50rem;
				height:80/50rem;
				padding-left:20/50rem;
				border:1px solid #87848C;
				border-radius:10/50rem;
				border-box:border-box;
				margin-top:35/50rem;
				outline:none;

				}
				
			}
	.box{
		position:absolute;
		width:100%;
		height:105/50rem;
		background:rgba(165,75,232,0.5);
		top:105/50rem;
		left:0;
		p{
			width:50%;
			height:105/50rem;
			line-height:105/50rem;
			text-align:center;
			color:#ffffff;
			font-size:14/50rem;
			float:left;
			img{
			width:36/50rem;
			height:34/50rem;
			vertical-align:middle;
			padding-right:14/50rem;
			}
			
		}
	}

        

	}

	
</style>