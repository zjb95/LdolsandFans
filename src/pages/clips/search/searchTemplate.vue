
<template>
	<div>
		<div class="SMovieNav_big">
			<div class="SMovieNav">
				<div @click="nav_select1">{{nav.one}}</div>
				<div class="SM_nav_actor" @click="nav_select1">{{nav.two}}</div>
				<div @click="nav_select1">{{nav.three}}</div>
			</div>
		
		
			<div class="inputSelect">
				<input type="text" v-model="searchMessage" placeholder="请输入查询关键字">
				<a @click='searchKey'>搜索</a>
			</div>
		</div>
		<SearchDeTemplate  :searchInfo='searchInfo'/>
	</div>
</template>
<script type="text/javascript">
import SearchDeTemplate from './searchDeTemplate';
	export default{
		name:'searchTemplate',
		data(){
			return {
				seleOne:false,
				seleTwo:true,
				seleThree:false,
				searchInfo:[],
				searchMessage:''
			}
		},
		props:{
			nav:{
				type:Object,
				default:function(){
					return {
						one:"演员",
						two:"片名",
						three:"角色"
					}
				}
			}
		},
		methods:{
			nav_select1(event){
				var siblings=event.target.parentNode.children;
				for(var i=0;i<siblings.length;i++){
					siblings[i].className=''
				}
				event.target.className="SM_nav_actor";
			},
			searchKey(event){
				// http://expand.video.iqiyi.com/api/search/list.json?type=list&apiKey=71c300df4a7f4e89a43d8e19e5458e6f&keyWord=
				// if(this.nav.one=="演员"){
					this.$axios.get('http://www.wwtliu.com/sxtstu/news/iqiyi_search.php?search='+this.searchMessage)
					.then(res=>{
						console.log(res.data.data)
						this.searchInfo=res.data.data;
					})
					.catch(error=>{
						console.log(error)
					})
				
				// }else if(this.nav.one=="昵称"){
				// 	console.log("您搜的是昵称")
				// }
				
			}
		},
		components:{
			SearchDeTemplate
		}
	}
</script>
<style scoped lang="less">
.SMovieNav_big{
	background-color:#F9F7FC;


	width:100%;
	height:100%;
	overflow:hidden;
	.SMovieNav{
		width:708/50rem;
		height:65/50rem;
		line-height:65/50rem;
		text-align:center;
		border:1/50rem solid #A54BE8;
		margin:18/50rem 21/50rem 20/50rem;
		border-radius:10/50rem;
		overflow:hidden;
		font-size:26/50rem;
		color:#a54be8;
		&>div{
			float:left;
			width:236/50rem;
			&.SM_nav_actor{
				background-color:#A54BE8;
				color:#fff;
			}
		}
	}
}
	
	.inputSelect{
		width:100%;
		position:relative;
		overflow:hidden;
		height:67/50rem;
		line-height:67/50rem;
		border-bottom:1/50rem solid #D7D2E0;
		padding:0 20/50rem 15/50rem 20/50rem;
		box-sizig:border-box;
		&>input{
			width:565/50rem;
			height:67/50rem;
			outline:none;
			border:none;
			padding-left:55/50rem;
			box-sizing:border-box;
			float:left;
			border-radius:10/50rem;
		
		}
		a{
			
			float:right;
			margin-right:60/50rem;
			color:#c08cee;
			font-size:30/50rem;
			
		}
		&::before{
			content:'';
			width:28/50rem;
			height:28/50rem;
			top:19.5/50rem;
			left:33/50rem;
			position:absolute;
			background-image:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/search/search_main_input_et_icon.png');
			background-size:28/50rem 28/50rem;
		}
	
	}
</style>