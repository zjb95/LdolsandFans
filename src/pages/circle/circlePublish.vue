<template>
	<div class="cirPublishContainer">
		<div class="cirPub_head">
			<div class="head_cancle"><router-link to='/circleIndex'>取消</router-link></div>
			<div><span>发圈子</span></div>
			<div class="head_send"><router-link to="/circleIndex">发送</router-link></div>
			
		</div>
		<div class="cirPub_sendText" >
			<div class="sendText" contenteditable="true">想和大家说...</div>
			<div class="addPic">
				<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/照片添加-1.png">
			</div>
			
		</div>
		<div class="cirPub_bottom">
			<router-link tag="div" to='/city' class="bottom_position" >
				<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/1-1.png">
				<span>{{cityName}}</span>
			</router-link>
			<div class="bottom_voice" @click="video_show">
				<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/2-1.png">
				<span >插入录音</span>
			</div>
			
		</div>
		<div class="mengban_video" v-if="videoShow">
			<div class="videoContainer">
				<div class="video_time">
					5''
				</div>
				<div class="OnContain">
					<img class='OnLeft' src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/z4.png">
					<img  @click="startRecording" class='OnCenter' src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/video1.png">
					<img  class='OnRight' src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/y4.png">
				</div>
				<div class="video_btn">
					<button @click="startRecording" class="video_start">开始</button>
					<button @click="stopRecord" class="video_end">结束</button>
				</div>
				<div class="video_bottom">
					<button @click="video_hide" class="video_cancle">取消</button>
					<button @click="video_hide"  class="video_send">确定</button>
				</div>	
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import "../../assets/js/video.js"
var recorder;  
var audio = document.querySelector('audio');  
	export default{
		name:'circlePublish',
		data(){
			return{
				cityName:"插入位置",
				OnLabel:"按住开始录音",
				videoShow:false
			}
		},
		created(){
			if(this.$route.query.cityName){
				this.cityName=this.$route.query.cityName
			}else{
				this.cityName="插入位置"
			}
		},
		methods:{ 
			video_show(){
				this.videoShow=true;
			},	
			video_hide(){
				this.videoShow=false;
				 var record = recorder.getBlob();  
               debugger;
			},

			// 录音
            startRecording(event) {  
                HZRecorder.get(function (rec) {  
                    recorder = rec;  
                    recorder.start();  
                });  
            } ,              
           obtainRecord(){  
                // var record = recorder.getBlob();  
                // debugger;  
            },  
            stopRecord(){  
                recorder.stop();  
            },   
            playRecord(){  
                recorder.play(audio);  
            }  
		}
	}
</script>
<style scoped lang="less">
.cirPublishContainer{
	width:100%;
	height:1333/50rem;
	background:#F2EEF9;
	.cirPub_head{
		color:#fff;
		background:#A54BE8;
		text-align:center;
		width:100%;
		height:105/50rem;
		line-height:105/50rem;
		display:flex;
		&>div{
			flex-grow:1;
			&.head_cancle{
				text-align:left;
				a{
					margin-left:32/50rem;
					color:#fff;
				}
			}
			&.head_send{
				text-align:right;
				a{
					margin-right:32/50rem;
					color:#fff100;
				}
			}
		}
		a{
			font-size:32/50rem;
		}
		span{
			font-size:36/50rem;
		}
	}
	.cirPub_sendText{
		width:100%;
		height:460/50rem;
		background:#fff;
		outline:none;
		.sendText{
			width:100%;
			height:280/50rem;
			font-size:30/50rem;
			color:#7b7781;
			padding:30/50rem 40/50rem;
			box-sizing:border-box;
			outline:none;
		}
		.addPic{
			width:143/50rem;
			height:143/50rem;
			margin-left:40/50rem;
			img{
				width:143/50rem;
				height:143/50rem;
			}
		}
	}
	.cirPub_bottom{
		width:100%;
		overflow:hidden;
		&>div{
			width:670/50rem;
			height:80/50rem;
			line-height:80/50rem;
			border:1/50rem solid #D0CADB;
			border-radius:10/50rem;
			box-sizing:border-box;
			font-size:26/50rem;
			color:#7b7781;
			position:relative;
			img{
				position:absolute;
				top:17.5/50rem;
				left:20/50rem;
			}
		}
		.bottom_position{
			margin:30/50rem auto 20/50rem;
			padding-left:77/50rem;
			img{
				width:33/50rem;
				height:45/50rem;
			}
		}
			.bottom_voice{
				margin:20/50rem auto;
				padding-left:72/50rem;
				img{
					width:28/50rem;
					height:45/50rem;
				}
				&+div{
					margin:20/50rem auto;
				}
			}
		}
		.mengban_video{
			height:100%;
			width:100%;
			position:absolute;
			top:0;
			left:0;
			background:rgba(0,0,0,0.5);
			.videoContainer{
				width:100%;
				height:600/50rem;
				background:#F2EEF9;
				position:absolute;
				bottom:0;
				left:0;
				.video_time{
					width:200/50rem;
					height:67/50rem;
					margin:24/50rem auto 26/50rem;
					line-height:55/50rem;
					color:#fff;
					font-size:30/50rem;
					text-align:center;
					background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/时长状态.png) no-repeat;
					background-size:200/50rem 67/50rem;
				}
				.OnContain{
					width:558/50rem;
					height:238/50rem;
					overflow:hidden;
					margin:0 auto;
					&>img{
						float:left;
					}
					.OnLeft{
						width:150/50rem;
						height:195/50rem;
					}
					.OnCenter{
						width:238/50rem;
						height:238/50rem;
						margin:0 10/50rem;
					}
					.OnRight{
						width:150/50rem;
						height:195/50rem;
					}
				}
				.video_bottom{
					height:100/50rem;
					width:710/50rem;
					overflow:hidden;
					margin:30/50rem auto 0;
					.video_cancle,.video_send{
						float:left;
						width:345/50rem;
						height:100/50rem;
						background:#fff;
						color:#A54BE8;
						font-size:37/50rem;
						border:none;
						border-radius:12/50rem;
						outline:none;
					}
					.video_cancle{
						margin-right:20/50rem;
					}
				}
				.video_btn{
					width:400/50rem;
					height:100/50rem;
					margin:0 auto;
					.video_start{
						margin-right:200/50rem;
					}
					.video_start,.video_end{
						float:left;
						width:100/50rem;
						height:100/50rem;
						border-radius:50%;
						border:none;
						background:#fff;
						color:#A0A0A0;
						outline:none;
					}

				}
				
			}
		}
		
}
</style>