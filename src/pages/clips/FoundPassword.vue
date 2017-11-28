<template>
	<div class="loginContainer">
		<router-link to="/login" class="back" tag="span"></router-link>
		<div class="logo">
			<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/menu_logo.png">
		</div>
		<h4>忘记密码</h4>
		<div class="loginInfo">
			<div class="phone"><span></span><input type="text" name="" placeholder="请输入手机号"></div>
			<div class="yanzhengma"><span></span><input type="text" name="" placeholder="请输入验证码"><a href="javascript:;">获取验证码</a></div>
			<div class="password"><span></span><input type="password" name="" placeholder="请设置新密码"></div>
			<div class="password"><span></span><input type="password" name="" placeholder="再次输入新密码"></div>
			<button>登录</button>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"Login",
		data(){
			return{
				
			}
		}
	}
</script>
<style scoped lang='less'>
	.loginContainer{
		padding-bottom: 200/50rem;
		width:100%;
		height:26.65rem;
		box-sizing:border-box;
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
			// margin-top:80/50rem;
			&>div{
				width:520/50rem;
				height: 160/50rem;
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
     				width:185/50rem;
     				height:60/50rem;
     				font-size:24/50rem;
     				text-align: center;
     				line-height:60/50rem; 
     				color: #fff;
     				background: #A54BE8;
     				position: relative;
     				left: 335/50rem;
     				top: -80/50rem;
     			}
     			&.yanzhengma{
     				margin-top:-10/50rem;
     				input{
     					padding-left:70/50rem;
     				}
     				input::-webkit-input-placeholder {
			            font-size:28/50rem;
						text-align:left;
						color:#E0C9ED;
     					}
     				&>span{
     					width:40/50rem;
     					height:40/50rem;
     					background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/certify_input_code_icon.png) no-repeat;
     					background-size:40/50rem 40/50rem;
     					top:75/50rem;
     				}
     			}
     			&.password{
     				margin-top:-30/50rem;
     				&>span{
     					background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/login_pwd_icon.png) no-repeat;
     					background-size:30/50rem 37/50rem;
     					top:75/50rem;
     				}
     			}
			}
			&>button{
				margin-top: 50/50rem;
				width:520/50rem;
				height:85/50rem;
				border:none;;
				color:#fff;
				font-size:30/50rem;
				background:#A54BE8;
				color:#fff;
			}
		}
		&>p{
			text-align:center;
			line-height:100/50rem;
			a{
				font-size:24/50rem;
				color:#937f9c;
			}
		}
		&>.loginBottom{
			font-size:24/50rem;
			line-height:150/50rem;
			color:#937f9c;
			text-align:center;
			margin-bottom:46/50rem;
			a{
				color:#cebed5;
				font-size:24/50rem;
			}
		}
	}
</style>