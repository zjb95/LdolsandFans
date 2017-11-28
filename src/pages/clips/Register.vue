<template>
	<div class="loginContainer">
		<router-link to="/login" class="back" tag="span"></router-link>
		<div class="logo">
			<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/menu_logo.png">
		</div>
		<h4>注册</h4>
		<div class="loginInfo">
			<div class="phone"><span></span><input type="text" name="" v-model='username' placeholder="请输入用户名">
				<div class="errorMes">{{message}}</div>
			</div>
			<div class="password"><span></span><input type="password" name="" v-model='password' placeholder="请输入密码"></div>
			<button @click="submitUser">提交</button>
		</div>
	</div>
</template>
<script type="text/javascript">
import qs from "qs"
	export default{
		name:"Register",
		data(){
			return{
				username:'',
				password:'',
				message:''
			}
		},
		methods:{
			submitUser(event){
				this.$axios.post("http://localhost:3000/login",{
					username:this.username,
					password:this.password
				})
				.then(res=>{
					if(res.data[0]){
						return;
					}else{
						this.$axios.post("http://localhost:3000/createuser",{
							username:this.username,
							password:this.password
						})
						.then(res=>{
							console.log(res)
						})
						.catch(error=>{
							console.log(error)
						})
					}
				})
				.catch(error=>{
					console.log(error)
				})
				
			}
		},
		watch:{
			username:function(){
				this.$axios.post("http://localhost:3000/login",{
					username:this.username,
					password:this.password
				}).then(res=>{
					if(res.data[0]){
						this.message="该用户名已注册"
					}else{
						this.message=""
					}
				})
				.catch(error=>{
					console.log(error)
				})
			}
		}
	}
</script>
<style scoped lang='less'>
.errorMes{
	color:red;
	font-size:14/50rem;
	height:20/50rem;
}
	.loginContainer{
		width:100%;
		height:26.65rem;
		box-sizing:border-box;
		padding-bottom: 300/50rem;
		background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/login_bg.png) no-repeat;
		.back{
			display: inline-block;
			width:21/50rem;
			height:37/50rem;
			margin-left:40/50rem;
			margin-top:30/50rem;
			background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/jiantouLeft.png) no-repeat;
			background-size:21/50rem 37/50rem;
		}
		.logo{
			width:300/50rem;
			height:145/50rem;
			margin:0 auto;
			margin-top:130/50rem;
			img{
				width:300/50rem;
				height:145/50rem;
			}
		}
		h4{
			font-size:30/50rem;
			text-align:center;
			color:#c0adcd;
			line-height:80/50rem;
			font-weight:normal;
		}
	.loginInfo{
			width:520/50rem;
			margin:0 auto;
			margin-top:80/50rem;
			&>div{
				width:520/50rem;
				input{
					width:520/50rem;
					height:80/50rem;
					padding-left:70/50rem;
					box-sizing:border-box;
					background-color:transparent;
					outline:none;
					border:none;
					color:#fff;
					font-size:36/50rem;
					border-bottom:2/50rem solid #AB83C1;		
				}
				input::-webkit-input-placeholder {
		            font-size:28/50rem;
					text-align:center;
					color:#E0C9ED;
     			}

     			&>span{
     				display:inline-block;
     				width:30/50rem;
     				height:40/50rem;
     				background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/login_phone_icon.png) no-repeat;
     				background-size:30/50rem 40/50rem;
     				position:relative;
     				top:70/50rem;
     				left:10/50rem;
     			}
     			&>a{
     				display:inline-block;
     				width:50/50rem;
     				height:50/50rem;
     				background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/login_clear_btn_normal.png) no-repeat;
     					background-size:40/50rem 40/50rem;
     					position:relative;
     					left:500/50rem;
     					top:-60/50rem;
     			}
     			&.password{
     				margin-top:-10/50rem;
     				&>span{
     					background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/login_pwd_icon.png) no-repeat;
     					background-size:30/50rem 37/50rem;
     					top:75/50rem;
     				}
     			}
			}
			&>button{
				width:520/50rem;
				height:85/50rem;
				margin-top:30/50rem;
				border:none;;
				color:#fff;
				font-size:30/50rem;
				background:#A54BE8;
				color:#fff;
				outline:none;
			}
		}
	}
</style>