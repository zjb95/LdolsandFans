<template>
	<div class="clipsXuanji">
		<div class="movie">
			<router-link to="/clipsIndex" class="back" tag="span"></router-link> 
			<!-- <h3>{{movies.albumName}}</h3> -->
			<iframe :src="url+tvid+url1" frameborder='0' width='100%' height='100%' allowfullscreen='true'>
			</iframe>
		</div>
		<div class="content">
			<div class="nav">
				<router-link tag='span'  :to="{name:'xuanjiComment',query:{index:$route.query.index}}" active-class="active">神评论</router-link>
				<router-link tag='span' :to="{name:'xuanjiIntro',query:{index:$route.query.index}}" active-class="active">内容简介</router-link>
				<router-link tag='span' :to="{name:'xuanji',query:{index:$route.query.index}}" active-class="active">选集</router-link>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'clipsXuanji',
		data(){
			return{
				movies:[],
				num:0,
				qipuId:0,
				url:"http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=77a4ba9809e102a2148796a15c4d964c&tvId=",
				url1:"&sign=2c2b428709b613a48425847a62f0dfbc17545dd569d1bfaf09cdad939321e65b&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%",
				tvid:0
			}
		 },
		 created(){
			// console.log(this.HOST)
			// var currentUrl = this.HOST+"album/info.json?apiKey=71c300df4a7f4e89a43d8e19e5458e6f&qipuId="+this.$route.params.id+"&categoryId=2";
			// console.log(currentUrl)

			// http://expand.video.iqiyi.com/api/album/info.json?apiKey=71c300df4a7f4e89a43d8e19e5458e6f&qipuId="+this.$route.params.id+"&categoryId=2
			this.$axios.get("http://www.wwtliu.com/sxtstu/news/iqiyi_video.php?qipuId="+this.$route.params.id)

			.then(res => {
				// console.log(res.data.data)
				this.movies = res.data.data;
				// console.log(this.movies);
				this.tvid=this.movies.tvIds[0];
				// console.log(this.tvid)
				// console.log(this.movies[this.num])

			})
			.catch(error =>{
				// console.log(error);
			})	
			// console.log(this.$route.params.id);
		}
	}
</script>
<style scoped lang="less">
	.movie{
		width: 100%;
		position: relative;
		height: 480/50rem;
		background: #000;
		overflow: hidden;
		iframe{
			margin-top: 37/50rem;
			height: 440/50rem;
		}
		.back{
			position: absolute;
			top:10/50rem;
			left:40/50rem; 
			display: inline-block;
			width:21/50rem;
			height:37/50rem;
			z-index: 888;
			background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/jiantouLeft.png) no-repeat;
			background-size:21/50rem 37/50rem;
		}
		h3{
			color: #fff;
			font-weight: normal;
			font-size: 30/50rem;
			margin-left: 100/50rem;
			margin-top: 25/50rem;
		}
		
	}
	.content{
		width: 100%;
		padding: 20/50rem;
		box-sizing: border-box;
		.nav{
			width: 710/50rem;
			height: 70/50rem;
			overflow: hidden;
			margin-bottom: 20/50rem;
			span{
				width: 236/50rem;
				box-sizing: border-box;
				height: 70/50rem;
				float: left;
				display: inline-block;
				text-align: center;
				line-height: 70/50rem;
				border: 1px solid #A54BE8;
				font-size: 30/50rem;
				color: #A54BE8;
				&:nth-of-type(2){
					border-left: none;
					border-right: none;
				}
				&:nth-of-type(1){
					border-radius: 10/50rem 0 0 10/50rem;
				}
				&:nth-of-type(3){
					border-radius: 0 10/50rem 10/50rem 0;
				}
				&.active{
					background: #A54BE8;
					color: #fff;
				}
			}
		}
	}
</style>