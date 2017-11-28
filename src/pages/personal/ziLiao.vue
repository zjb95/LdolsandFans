<template>
	<div class="personal-box">
		<div class="header">
			<router-link tag='a' to='/personalIndex'><img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/f-1.png"></router-link>
			<h5>个人资料</h5>
		</div>
		<div class="zl-top">
			<div class="touxiang">
				<span>头像</span>
				<img class="shili" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/示例照片.png">
				<img class="jiantou1" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png">
				<!-- <el-upload
				  class="avatar-uploader"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="imageUrl" :src="imageUrl" class="avatar">
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload> -->				
			</div>
			<router-link tag='div' to='/bianjinicheng' class="nicheng">
				<span>昵称</span>
				<b>不一样的烟火</b>
				<img class="jiantou" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png">
			</router-link>
			<router-link tag='div' to='oufenhao' class="oufenhao">
				<span>偶粉号</span>
				<b>15104595566</b>
				<img class="jiantou" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png">				
			</router-link>
			<router-link tag='div' to='shoujihao' class="shoujihao">
				<span>手机号</span>
				<b>13613652693</b>
				<img class="jiantou" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png">				
			</router-link>
		</div>
		<div class="zl-bottom">
			<div class="xingbie" @click="goToXingbie">
				<span>性别</span>
				<b>{{sex}}</b>
				<img class="jiantou" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png">
			</div>
			<div class="diqu">
				<span>地区</span>
				<b>北京 通州区</b>
				<img class="jiantou" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png">
			</div>
			<router-link tag='div' to='gexingqianming' class="qianming">
				<span>个性签名</span>
				<span class="gexing">人生如寄,感谢给予我的一切人事物</span>
				<img class="jiantou" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png">
			</router-link>
			<div class="fit"></div>
		</div>
		<XingBie :show='show' v-if="show" @showed='showed($event)' @getwoman='getwoman' @getman='getman'/>
	</div>
</template>
<script type="text/javascript">
import XingBie from "./xingbie"
	export default{
		name:"ziLiao",
		data(){
			return{
				  show:false,
				  imageUrl: '',
				  sex:'女神'
			}
		},
		components:{
			XingBie
		},
		methods:{
			goToXingbie(event){
				this.show = true;
				console.log(this.show)
				},

			  getwoman(data){
			  	this.sex=data;

			  },
			  getman(data){
			  	this.sex=data;

			  },
			showed($event){
				this.show=$event;
			},
			handleAvatarSuccess(res, file) {
		        this.imageUrl = URL.createObjectURL(file.raw);
		      },
		      beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;

		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		      }
		    },
		}
	
</script>
<style  scoped lang="less">
	.personal-box{
		background:#F2EEF9;
		height: 100%;
	}
	.header{
		height:105/50rem; 
		width:100%;
		background:#A54BE8;
	}
	.header>a>img{
		height:40/50rem;
		width:20/50rem;
		margin-top:0.7rem;
		margin-left:40/50rem;
	}
	.header>h5{
		display:inline-block;
		color:#fff;
		font-weight:normal;
		margin-left:220/50rem;
		
	}
	.zl-top{
		margin-top: 30/50rem;
		width: 100%;
		height: 475/50rem;
		background: #fff;
	}
	.touxiang{
		border-bottom: 1px solid #E5E2EB;
		height: 160/50rem;
		width: 710/50rem;
		margin: 0 auto;
	}
	.shili{
		width: 100/50rem;
		height: 100/50rem;
		margin-top: 30/50rem;
		margin-left: 389/50rem;
	}
	.touxiang>span{
		font-size: 36/50rem;
		color: #1b1b1b;
		margin-left: 50/50rem;
		margin-top: -30/50rem;
		font-weight: bold;
		display: inline-block;
		position: relative;
		top: -30/50rem;
	}
	.nicheng{
		border-bottom: 1px solid #E5E2EB;
		height: 100/50rem;
		width: 710/50rem;
		margin: 0 auto;
	}
	.nicheng>span{
		font-size: 36/50rem;
		color: #1b1b1b;
		margin-left: 50/50rem;
		margin-top: 25/50rem;
		font-weight: bold;
		display: inline-block;
	}
	.nicheng>b{
		font-weight: normal;
		font-size: 28/50rem;
		color: #707070;
		display: inline-block;
		margin-left: 320/50rem;
	}
	.oufenhao{
		border-bottom: 1px solid #E5E2EB;
		height: 100/50rem;
		width: 710/50rem;
		margin: 0 auto;
	}
	.oufenhao>span{
		font-size: 36/50rem;
		color: #1b1b1b;
		margin-left: 50/50rem;
		margin-top: 25/50rem;
		font-weight: bold;
		display: inline-block;
	}
	.oufenhao>b{
		font-weight: normal;
		font-size: 28/50rem;
		color: #707070;
		display: inline-block;
		margin-left: 270/50rem;
	}
	.shoujihao{
		// border-bottom: 1px solid #E5E2EB;
		height: 100/50rem;
		width: 710/50rem;
		margin: 0 auto;
	}
	.shoujihao>span{
		font-size: 36/50rem;
		color: #1b1b1b;
		margin-left: 50/50rem;
		margin-top: 25/50rem;
		font-weight: bold;
		display: inline-block;
	}
	.shoujihao>b{
		font-weight: normal;
		font-size: 28/50rem;
		color: #707070;
		display: inline-block;
		margin-left: 270/50rem;
	}
	.line{
		width: 690/50rem;
		height: 1/50rem;
	}
	.line>img{
		width: 690/50rem;
		margin-left: 30/50rem;
		height: 1/50rem;
	}
	.jiantou{
		width: 20/50rem;
		height: 33/50rem;
		float: right;
		position: relative;
		top:37/50rem;
		left: -20/50rem;
	}
	.jiantou1{
		width: 20/50rem;
		float: right;
		height: 33/50rem;
		position: relative;
		top:70/50rem;
		left: -20/50rem;
	}
	.zl-bottom{
		margin-top: 40/50rem;
		width: 100%;
		height: 370/50rem;
		background: #fff;
	}
	.xingbie{
		border-bottom: 1px solid #E5E2EB;
		height: 100/50rem;
		width: 710/50rem;
		margin: 0 auto;	
	}
	.xingbie>span{
		font-size: 36/50rem;
		color: #1b1b1b;
		margin-left: 50/50rem;
		margin-top: 0.6rem;
		font-weight: bold;
		display: inline-block;
	}
	.xingbie>b{
		font-weight: normal;
		font-size: 28/50rem;
		color: #707070;
		display: inline-block;
		margin-left: 429/50rem;
	}
	.diqu{
		border-bottom: 1px solid #E5E2EB;
		height: 100/50rem;
		width: 710/50rem;
		margin: 0 auto;
	}
	.diqu>span{
		font-size: 36/50rem;
		color: #1b1b1b;
		margin-left: 50/50rem;
		margin-top: 0.6rem;
		font-weight: bold;
		display: inline-block;
	}
	.diqu>b{
		font-weight: normal;
		font-size: 28/50rem;
		color: #707070;
		display: inline-block;
		margin-left: 339/50rem;
	}
	.qianming{
		border-bottom: 1px solid #E5E2EB;
		height: 150/50rem;
		width: 710/50rem;
		margin: 0 auto;
	}
	.qianming>span{
		font-size: 36/50rem;
		color: #1b1b1b;
		margin-left: 50/50rem;
		margin-top: 0.6rem;
		font-weight: bold;
		display: inline-block;
	}
	// .qianming>b{
	// 	font-weight: normal;
	// 	font-size: 28/50rem;
	// 	color: #707070;
	// 	display: inline;
	// 	margin-left: 320/50rem;
	// 	width: 410/50rem;
	// 	height: 85/50rem;
	// }
	.qianming .gexing{
		font-weight: normal;
		font-size: 28/50rem;
		color: #707070;
		display: inline-block;
		// margin-left: 320/50rem;
		width: 365/50rem;
		height: 85/50rem;
	}
	.fit{
		height: 325/50rem;
		width: 100%;
		background: #F2EEF9;
	}
	 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 50/50rem;
    height: 50/50rem;
    line-height: 50/50rem;
    text-align: center;
    // margin-left: 550/50rem;
    // margin-top: -500/50rem;
    position: relative;
    top: -70/50rem;
    left: 550/50rem;
  }
  .avatar {
    width: 50/50rem;
    height: 50/50rem;
    display: none;
  }
</style>
