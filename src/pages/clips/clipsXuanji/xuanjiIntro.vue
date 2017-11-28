<!-- 电视剧简介 -->
<template>
	<div class="intro">
		<div class="guanfang">
			<h3>官方机构 <span></span></h3>
			<div>
				<p class="zhipian">
					<span>导演制片人:</span>
					<a href='javascript:;' class="button">+ {{movies.director}}</a>
				</p>
			</div>
		</div>
		<div class="star">
			<h3>主要演员 <span></span></h3>
			<div class="yanyuan">
				<p v-for='(item,index) in movies.creditList'>
					<span>演员: {{item.name}}</span>
					<a href='javascript:;' class="button">角色: {{item.roleName}}</a>
				</p>
			</div>
		</div>
		<div class="pianhua">
			<h3>片花简介 <span></span></h3>
			<h6>{{movies.desc}}</h6>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'xuanjiIntro',
		data(){
			return{
				movies:[]
			}
		},
		created(){

			// var currentUrl = this.HOST+"album/info.json?apiKey=71c300df4a7f4e89a43d8e19e5458e6f&qipuId="+this.$route.params.id+"&categoryId=2&limit=10";
			
			this.$axios.get("http://www.wwtliu.com/sxtstu/news/iqiyi_video.php?qipuId="+this.$route.params.id)

			.then(res => {
				// console.log(res.data.data)
				this.movies = res.data.data;
				// console.log(this.movies);
				

			})
			.catch(error =>{
				// console.log(error);
			})	
			// console.log(this.$route.params.id);
		}
	}
</script>
<style scoped lang="less">
	.intro{
		width: 100%;
		padding: 20/50rem;
		box-sizing: border-box;
		&>div{
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
				width: 525/50rem;
				position: relative;
				top:-6/50rem;
				border-top:1/50rem solid #DDD;
			}
		}
			h6{
					font-size: 30/50rem;
					font-weight: normal;
					color:#89888B; 
				}
		&>div{
			p{
				overflow: hidden;
				height: 90/50rem;
				width: 710/50rem;
				padding-left:10/50rem;
				padding-right: 20/50rem;
				box-sizing: border-box;
				line-height: 80/50rem;
				border-bottom: 1/50rem solid #DDD;
				&:last-child{
					border-bottom: none;
				}
				span{
					font-size: 28/50rem;
					color: #313131;
					font-weight: 700;
					position: relative;
					top:-5/50rem;
				}
				a{
					display: inline-block;
					width: 200/50rem;
					font-size: 28/50rem;
					color: #313131;
					font-weight: bold;
					float: right;
					position: relative;
					top: -5/50rem;
					right: 20/50rem; 
					text-align: left; 
				}
			}

		}

	}
}
</style>