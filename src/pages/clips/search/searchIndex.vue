<template>
	<div class="searchContainer">
		<span v-if='flag'  class="search_left"></span>
		<span v-else  class="search_right"></span>
		<div class="searchHead">
			<router-link tag="div" to="/clipsIndex" class="seac_Head_back" >
				<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/search/f-1.png">
			</router-link>
			<div class="seac_Head_title">搜索</div>
		</div>
		<div class="searchMain">
			<router-link  :to='{path:"SearchMovie"}'>
				<div class="searchMovie" @click='searchMainSeleL' :class='{searchActive:!flag}'>
					<p>找片</p>	
						
				</div>
			</router-link>
			 <router-link :to='{path:"SearchPeople"}'>
			 	<div class="searchPeople" @click='searchMainSeleR' :class='{searchActive:flag}'>
					<p>找人</p>				
				</div>
			 </router-link>
		</div>
		<router-view></router-view>

	</div>
</template>
<script type="text/javascript">
	export default{
		name:'searchIndex',
		data(){
			return{
				flag:true
			}
		},
		methods:{
			searchMainSeleL(){
				this.flag=true;
			},
			searchMainSeleR(){
				this.flag=false;
				console.log(location.href)
			}
		}

	}
</script>
<style scoped lang="less">
.active{
	color:#fff;
}

.searchContainer{
	width:100%;
	&>span{
		width: 0;
		height: 0;
		display: inline-block;
		border-top: 20/50rem solid transparent;
		border-bottom: 20/50rem solid #F9F7FC;
		border-left: 20/50rem solid transparent;
		border-right: 20/50rem solid transparent;
		position: absolute;
		top:156/50rem;
		left:25%;
		z-index:11;
		margin-left:-20/50rem;
		&.search_right{
			left:75%;
		}
	}
	
	.searchHead{
		width:100%;
		border-bottom:1/50rem solid #983EDB;
		height:105/50rem;
		line-height:105/50rem;
		background:#A54BE8;
		.seac_Head_back{
			position:absolute;
			left:38/50rem;
			width:21/50rem;
			height:37/50rem;
			img{
				width:21/50rem;
				height:37/50rem;
			}
			
		}
		.seac_Head_title{
			color:#fff;
			text-align:center;
			font-size:36/50rem;
		}
	}
	.searchMain{
		width:100%;
		height:90/50rem;
		background:#A54BE8;
		font-size:30/50rem;
		text-align:center;
		overflow:hidden;
		padding:15/50rem 0;
		box-sizing:border-box;
		&>a>div{
			position:relative;
			height:60/50rem;
			width:50%;
			float:left;
			color:#fff;
			p{
				width:100%;
				height:60/50rem;
			}

		}
		.searchMovie{
			p{
				border-right:1/50rem solid #983EDB;
				box-sizing:border-box;
			}
		}
		.searchActive{
			color:#8026c5;
		}
	}
}
</style>