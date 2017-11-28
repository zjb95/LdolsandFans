<template>
	<div class="personal-box">
		<div class="personal-top">
			<router-link tag='div' to='/sheZhi' class="set">
				<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/profile_set_icon_normal.png">
			</router-link>
			<router-link tag='span' to='/movementAttention'>
				<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/touxiang.jpg">
			</router-link>
			<div class="personal-topTitle">不一样的烟火</div>
			<div class="personal-topId">id:03452100</div>
			<div class="personal-topSign">个性签名:人生何时才是尽头...</div>
			<div class="personal-topQr">
				<router-link tag='div' to='/erweima' class="personal-toplQr">
					<span>
					<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/profile_erweima_icon.png">
					</span>
					<a>我的二维码</a>
				</router-link>
				<router-link tag='div' to='/ziLiao' class="personal-toprQr">
					<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/profile_edit_icon.png">
					<a>编辑资料</a>
				</router-link>
			</div>
		</div>
		<div class="personal-bottom">
			<div class="personal-bottomleave">
				<span>照片集空空的,快点添加吧^-^</span>
				<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/profile_photo_add_pressed.png">
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
			<div class="personal-bottomnum">
				<router-link tag='div' to='/personalRegard' class="personal-bottomone">
					<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/profile_about_icon.png">
					<span>关于偶粉</span>
					<img class="jiantou" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png">
				</router-link>
				<router-link tag='div' to='/fanKui' class="personal-bottomtwo">
					<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/profile_feedback_icon.png">
					<span>意见反馈</span>
					<img class="jiantou" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png">
				</router-link>
				<div class="personal-bottomthree" @click="goToRenzheng">
					<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/profile_cerify_icon.png">
					<span>我要认证</span>
					<img class="jiantou" src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/jiantou.png">
				</div>
			</div>
		</div>
		<RenZheng v-if="show" @showed='showed($event)'/>
	<div class="up_bottom"></div>
	<FooterIndex/>
	</div>
</template>
<script type="text/javascript">
import FooterIndex from '../../components/footer.vue'
import RenZheng from "./renZheng"

	export default{
		name:"personalIndex",
		data(){
			return{
				show:false,
				imageUrl: ''
			}
		},
		components:{
			RenZheng,
			FooterIndex
		},
		methods:{
			goToRenzheng(event){
				this.show = !this.show;
				
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

		}
	}
</script>
<style  scoped lang="less">
.up_bottom{
	height:111/50rem;
}
	.personal-box{
		background:#F2EEF9;
		position: relative;
	}
	.personal-top{
		overflow:hidden;
		width: 100%;
		height: 14rem;
		background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/touxiang.jpg) no-repeat;
		background-size:100%;
	}
	.personal-top>span>img{
		border-radius:50%;
		border:5px solid #cccccc;
		width:200/50rem;
		height:200/50rem;
		margin:0 auto;
		display:block;
		margin-top:70/50rem;
	}
	.personal-topTitle{
		font-size:20px;
		color:#FDFDFD;
		margin-left: 250/50rem;
		margin-top: 20/50rem;
	}
	.personal-topId{
		font-size:18px;
		color:#000;
		margin-left: 270/50rem;
		margin-top: 20/50rem;
	}
	.personal-topSign{
		font-size:17px;
		color:#000;
		width:600/50rem;
		height:70/50rem;
		margin-left:3.3rem;
		margin-top: 0.5rem;
	}
	.personal-topQr{
		width:100%;
		height:140/50rem;
		background:rgba(0,0,0,.1);
		margin-top:-0.1rem;
	}
	.personal-toplQr{
		width:49%;
		display:inline-block;

	}
	.personal-toprQr{
		width:49%;
		display:inline-block;
	}
	.personal-toplQr>span>img{
		width:1rem;
		height:1rem;
		margin-left:60/50rem;
		margin-top:40/50rem;
	}
	.personal-toplQr>a{
		font-size:17px;
		position:relative;
		top:-15/50rem;
		margin-left:0.50rem;
		color:#fff;
	}
	.personal-toprQr>img{
		width:1rem;
		height:1rem;
		margin-left:60/50rem;
		margin-top:40/50rem;
	}
	.personal-toprQr>a{
		font-size:17px;
		position:relative;
		top:-15/50rem;
		margin-left:0.50rem;
		color:#fff;
	}
	.personal-bottom{
		background:#F2EEF9;
	}
	.personal-bottomleave{
		width:680/50rem;
		height:160/50rem;
		border:1px solid #E6E3EB;
		background:#FAF9F8;
		border-radius:10px;
		margin:30/50rem;
	}
	.personal-bottomleave>span{
		font-size:17px;
		color:#D6D0DF;
		display:inline-block;
		position:relative;
		top:-0.9rem;
		margin-left:20/50rem;
		font-weight: normal;
	}
	.personal-bottomleave>img{
		width:120/50rem;
		height:120/50rem;
		margin-left:20/50rem;
		margin-top:20/50rem;
	}
	.personal-bottomone{
		width:100%;
		box-sizing:border-box;
		height:2.3rem;
		border:1px solid #ECEAF0;
		background:#fff;
		font-weight: normal;
	}
	.personal-bottomtwo{
		width:100%;
		height:2.3rem;
		border:1px solid #ECEAF0;
		box-sizing:border-box;
		background:#fff;
	}
	.personal-bottomthree{
		width:100%;
		height:2.3rem;
		border:1px solid #ECEAF0;
		box-sizing:border-box;
		background:#fff;
	}
	.personal-bottomnum>div>img{
		width:35/50rem;
		height:35/50rem;
		margin-top:37/50rem;
		margin-left:1rem;
		&.jiantou{
			position:relative;
			left:6.6rem;
			width:15/50rem;
			height:30/50rem;
		}
	}
	.personal-bottomnum>div>span{
		font-size:20px;
		color:#1b1b1b;
		margin-left:35/50rem;
		font-weight:bolder;
	}
	
	.set>img{
		position:relative;
		right:-13rem;
		top:60/50rem;
		width:1rem;
		height:45/50rem;
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
    position: relative;
    top: -30/50rem;
    left: 550/50rem;
  }
  .avatar {
    width: 50/50rem;
    height: 50/50rem;
    display: block;
  }
</style>
