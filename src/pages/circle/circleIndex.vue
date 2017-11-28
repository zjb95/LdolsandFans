<template>
	<div class="circleContainer">
		
		<div class="circleHead">
			<div class="cirHeadTitle">
				<span>圈子</span>
				<img v-if='sele_down' @click='circle_sidedown' src='http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/circle_to_down_arrow.png'>
				<img v-else @click='circle_sidedown' src='http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/circle_to_up_arrow.png'>
			</div>
			<router-link tag="div" to="/circlePublish" class="ch_write_logo">
				<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/circle_edit_icon_normal.png">
			</router-link>
		</div>
		
		<div class="circleContent">
			<div v-if="!sele_down"  class="circleHead_sidedown">
				<div><button class='select' @click='get_seleDown'>全部</button></div>
				<div><button  @click='get_seleDown'>热门</button></div>
				<div><button  @click='get_seleDown'>关注</button></div>	
			</div>
			<ul>
				<li  v-for="(item,index) in allCommentList" :key="index" >
					<div class="cirCon_head">
						<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/头像底.png">
						<div class="cirCon_head_author">
							<p class='cConHead_authorName'>{{item.user_name}}</p>
							<p class='cConHead_authorTime'>
								{{item.create_time}}  三里屯
							</p>
							
						</div>
						<div class="cirCon_head_like">
							<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/zan_btn_normal.png">
							<span>506</span>
						</div>
					</div>
					<router-link tag="div" to="/circleContent" class="cirCon_textImg"  >
						<p class="cirCon_text">{{item.content}}</p>
						<div class="cirCon_img">
							<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/circle_writeImg1.jpg">
							<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/circle_writeImg2.jpg">
						</div>
					</router-link>
					<div class="cirCon_more">
						<div class="huifu">
							<div  class="cirCon_more_comment">
							<div class="unlike">
								<i class="iconfont icon-zan-copy"></i>踩(203)
							</div>
							<div class="share">
								<i class="iconfont icon-fenxiang"></i>分享
							</div>
							<div class="comment">
								<i class="iconfont icon-L4"></i>评论
							</div>
						</div>
						<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/more_btn_normal.png">
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="up_bottom"></div>
		<FooterIndex/>
	</div>
</template>
<script type="text/javascript">
import FooterIndex from '../../components/footer.vue'
	export default{
		name:'CircleIndex',
		data(){
			return {
				allCommentList:[],
				sele_down:true,
				commentShow:false
			}
		},
		created(){
		this.$axios.get("../../../static/json/circleText.json")
		.then(res=>{
			// console.log(res.data)
			this.allCommentList=res.data.allCommentList
		})
		.catch(error=>{
			console.log(error)
		})
	},
	methods:{
		comment_show(){
			this.commentShow=!this.commentShow;
		},
		circle_sidedown(event){
			this.sele_down=!this.sele_down
		},
		get_seleDown(event){
			var siblings=event.target.parentNode.parentNode.children;
			for(var i=0;i<siblings.length;i++){
				siblings[i].children[0].className='';
			}
			event.target.className="select";
		}
	},
	components:{
		FooterIndex
	}
}
</script>
<style scoped lang="less">
// 25px   1rem = 50px;  0.5rem  

.circleContainer{
	.up_bottom{
		height:111/50rem;
	}
	.circleHead{
		background:#A54BE8;
		height:105/50rem;
		padding:0 30/50rem;
		box-sizing:border-box;
		width:100%;
		line-height:105/50rem;
		position:relative;
		.cirHeadTitle{
			font-size:36/50rem;
			color:#fff;
			text-align:center;
			img{
				width:27/50rem;
				height:27/50rem;
			}
		}
		.ch_write_logo{
			position:absolute;
			right:30/50rem;
			top:0;
			img{
				width:37/50rem;
				height:36/50rem;
			}
		}
	}
	
	.circleContent{
		background-color:#F2EEF9;
		width:100%;
		padding:5/50rem 20/50rem;
		box-sizing:border-box;
		position:relative;
		.circleHead_sidedown{
			width:100%;
			height:100/50rem;
			background:rgba(165,75,232,0.8);
			line-height:100/50rem;
			position:absolute;
			display:flex;
			top:0;
			left:0;
			text-align:center;
			div{
				flex-grow:1;
				font-size:30/50rem;
				button{
					background-color:transparent;
					color:#721CB1;
					width:140/50rem;
					height:54/50rem;
					font-size:30/50rem;
					border:none;
					border-radius:27/50rem;
					outline:none;
				}
				button.select{
					color:#fff;
					background-color:#9440D3;
				}
				&:nth-child(1){
					button{

					}
				}

			}
		}
		ul{
			width:100%;
			li{
				margin-top:20/50rem;
				padding:0 20/50rem 0 10/50rem;
				box-sizing:border-box;
				div.cirCon_head{
					overflow:hidden;
					span{
							color:#959595;
							font-size:24/50rem;
						}
					&>img{
						wdith:70/50rem;
						height:70/50rem;
						float:left;
						margin-right:25/50rem;
					}
					&>.cirCon_head_author{
						float:left;
						p.cConHead_authorName{
							font-size:31/50rem;
							color:#A54BE8;
						}
						p.cConHead_authorTime{
							color:#959595;
							font-size:24/50rem;
						}
					}
					.cirCon_head_like{
						float:right;
						img{
							width:36/50rem;
							height:36/50rem;
						}
					}
				}
				.cirCon_textImg{

					margin-left:95/50rem;
					p.cirCon_text{
						font-size:34/50rem;
						
					}
					.cirCon_img{
						margin-top:20/50rem;
						img{
							width:173/50rem;
							height:173/50rem;
						}
					}

				}
				.cirCon_more{
					
					height:95/50rem;
					overflow:hidden;
					.huifu{
						width:77/50rem;
						height:46/50rem;
						position:relative;
						left:580/50rem;
						&:hover .cirCon_more_comment{
							display:block;
						}
					}
					.cirCon_more_comment{
						display:none;
						position:absolute;
						left:-580/50rem;
						float:left;
						width:560/50rem;
						height:90/50rem;
						margin-left:30/50rem;
						background-color:#493D52;
						padding:12.5/50rem 12.5/50rem;
						box-sizing:border-box;
						border-radius:10/50rem;
						&>div{
							height:65/50rem;
							line-height:65/50rem;
							background-color:#6C597A;
							border-radius:10/50rem;
							float:left;
							color:#fff;
							text-align:center;
							font-size:30/50rem;
							&>i{
								margin-right:12/50rem;
							}
						}
						.unlike{
							width:190/50rem;
						}
						.share{
							width:160/50rem;
							margin:0 12.5/50rem;
						}
						.comment{
							width:160/50rem;
						}
					}
					img{
						float:right;
						width:77/50rem;
						height:46/50rem;
					}
				}
			}
		}
	}
}
</style>