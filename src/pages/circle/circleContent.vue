<template>
	<div class="circleContentContainer">
		<div class="circlrContent_Head">
			<img onclick="window.history.go(-1)" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/jiantouLeft.png" />
			<span>圈子正文</span>
		</div>
		<div class="circlrContent_Text">
			<li>
				<div class="cirCon_head">
					<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/头像底.png">
					<div class="cirCon_head_author">
						<p class='cConHead_authorName'>哈嗯哼哼</p>
						<p class='cConHead_authorTime'>
							刚刚  三里屯
						</p>
					</div>
					<div class="cirCon_head_like">
						<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/zan_btn_normal.png">
						<span>506</span>
					</div>
				</div>
				<div class="cirCon_textImg">
					<p class="cirCon_text">回电话机电设备毕加索的随机数，的说的就是你当初捡红包大家说，山东济南才开始巴适得很黄金和不定代词就城南旧事吃嫩草问单号。</p>
					<div class="cirCon_img">
						<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/circle_writeImg1.jpg">
						<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/circle_writeImg2.jpg">
					</div>
				</div>
				<div class="cirCon_more">
					<span class="deleteText">删除本文</span>
					<div class="fenxiang">
						
						<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/f-2.png">
						<span>分享</span>
					</div>
				</div>
			</li>
		</div>
		<div class="circlrContent_Write">
			<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/下部-输入icon.png">
			<input type="text" class="circlr_WirteInner" placeholder="请输评论内容...">
		</div>
	</div>
</template>
<script type="text/javascript">

	export default{
		name:'circleContent',
		data(){
			return{

			}
		}
	}
</script>
<style scoped lang="less">
.circleContentContainer{
	width:100%;
	height:100%;
	.circlrContent_Head{
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
	.circlrContent_Text{
		background-color:#F2EEF9;
		li{
			border-bottom:1/50rem solid #E6E1ED;
				padding:24/50rem 20/50rem 0 10/50rem;
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
					margin-top:30/50rem;
					height:95/50rem;
					overflow:hidden;
					color:#A54BE8;
					font-size:24/50rem;
					span.deleteText{
						float:left;
						margin-left:95/50rem;
					}
					div.fenxiang{
						float:right;
						img{
							margin-right:14/50rem;
							width:34/50rem;
							height:34/50rem;
							
						}
						span{
							float:right;
						}
					}
					
					
				}
			
		}
	}
	.circlrContent_Write{
		width:100%;
		height:93/50rem;
		position:fixed;
		bottom:0;
		left:0;
		text-align:center;
		background:#F2EEF9;
		.circlr_WirteInner{
			width:696/50rem;
			height:65/50rem;
			background:#fff;
			border-radius:12/50rem;
			outline:none;
			border:none;
			padding-left:72/50rem;
			box-sizing:border-box;
			font-size:25/50rem;
		}
		img{
			position:absolute;
			left:42/50rem;
			top:28.5/50rem;
			width:36/50rem;
			height:36/50rem;


		}
	}
}
</style>