<!-- 电视剧评论 -->
<template>
	<div class="comment">
		<h3>精彩评论 <span></span></h3>
		<ul>
			<li v-for='(item,index) in comment'>
				<div class="touxiang">
					<img src="http://img7.qiyipic.com/passport/20170429/64/b8/passport_2500996881_149342872770550_130_130.jpg">
				</div>
				<div class="pinglun">
					<div class="nickname">
						<p>{{item.name.substr(0,15)}}</p>
						<h5>
							<span>{{Date(item.snsTime).substr(15,10)}}</span>
						</h5>
					</div>
					<div class="dianzan">
						<a href="javascript:;">
							<i class="iconfont icon-zan"></i>
						</a>
						<span>{{item.uvCount}}</span>
						<router-link to='/allReply' tag='b'>
						<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/more_btn_normal.png">
						</router-link>
					</div>
					<p>{{item.description.substr(0,60)}}...</p>
				</div>
			</li>
		</ul>
		<div class="circlrContent_Write">
			<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/下部-输入icon.png">
			<input type="text" class="circlr_WirteInner" placeholder="请输评论内容...">
		</div>

	</div>
</template>
<script type="text/javascript">
import '../../../../static/font/iconfont.css'
	export default{
		name:'xuanjiComment',
		data(){
			return{
				comment:[]
			}
		},
		created(){
			this.$axios.get("http://www.wwtliu.com/sxtstu/news/iqiyi_comment.php")

			.then(res => {
				// console.log(res.data.data.feeds)
				this.comment = res.data.data.feeds;
				// console.log(this.comment);
				

			})
			.catch(error =>{
				// console.log(error);
			})	
			// console.log(this.$route.params.id);
		}
	}
</script>
<style scoped lang="less">

	.comment{
		width: 100%;
		h3{
			font-size: 30/50rem;
			color: #000;
			height: 40/50rem;
			padding-left: 10/50rem;
			margin-bottom: 20/50rem;
			border-left: 5/50rem solid #A54BE8;
			span{
				display: inline-block;
				height: 1/50rem;
				width: 555/50rem;
				position: relative;
				top:-6/50rem;
				border-top:1/50rem solid #DDD;
			}
		}

		ul{
			li{
				padding: 30/50rem 20/50rem 48/50rem 10/50rem;
				box-sizing: border-box;
				width: 700/50rem;
				overflow: hidden;
				border-bottom: 1/50rem solid #DDD;
				&>div{
					float: left;
					&.touxiang{
						width: 70/50rem;
						height: 70/50rem;
						border-radius: 50%;
						margin-right: 20/50rem;
						img{
							width: 70/50rem;
							height: 70/50rem;
							border-radius: 50%;

						}
					}

					&.pinglun{
						width: 580/50rem;
						overflow: hidden;
						&>div{
							float: left;
							height: 70/50rem;
							margin-bottom: 30/50rem;
							&.nickname{
								width: 380/50rem;
								p{
									font-size: 30/50rem;
									color: #b676eb;
								}
								h5{
									font-weight: normal;
									font-size: 24/50rem;
									line-height: 50/50rem;
									color: #959595;
									span{
										margin-right: 20/50rem;
									}
								}
							}
							&.dianzan{
								width: 200/50rem;
								a{
									position: relative;
									top:-7/50rem;
									left:-60/50rem;
									display: inline-block;
									width: 30/50rem;
									height: 30/50rem;
									color: #666;
									margin-left: 20/50rem;
									&:hover{
										color: #b676eb;
									}
								}
								span{
									font-size: 24/50rem;
									color:#959595;
									position: relative;
									top:-7/50rem;
									left:-45/50rem;
								}
								img{
									position: relative;
									top: -60/50rem;
									z-index: 888;
									width: 75/50rem;
									height: 45/50rem;
									margin-left: 90/50rem;
								}
							}
						}
					}
				}

				p{
					font-size:30/50rem;
					color: #313131;
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