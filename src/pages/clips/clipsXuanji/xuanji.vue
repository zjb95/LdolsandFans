<template>
	<div class="xuanji">
		<ul>
			<li v-for='(item,index) in datas'>
				<img :src="item.qualityImageUrl">
				<div class="xuanjiright">
					<h1>{{item.name}}</h1>
					<p>{{item.description}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'xuanji',
		data(){
			return{
				datas:[],
				movies:[]
			}
		},
		created(){
			// console.log(this.HOST)
			// var currentUrl = this.HOST+"album/info.json?apiKey=71c300df4a7f4e89a43d8e19e5458e6f&qipuId="+this.$route.params.id+"&categoryId=2";
			this.$axios.get("http://www.wwtliu.com/sxtstu/news/iqiyi_video.php?qipuId="+this.$route.params.id)

			.then(res => {
				this.movies = res.data.data;
				// console.log(this.movies);
				for(var i in this.movies.tvIds){
				// console.log(this.movies.tvIds[i])
				this.$axios.get("http://mixer.video.iqiyi.com/jp/mixin/videos/"+this.movies.tvIds[i]+"?select=user,credit,focus,star,cast&status=1")

					.then(res => {
						var data = res.data.substr(13);
						

						var str = JSON.parse(data);
						this.datas.push(str);

					})
					.catch(error =>{
						// console.log(error);
					})	
				}
				
				console.log(this.datas);
			})
			.catch(error =>{

			})	
		}
	}
</script>
<style scoped lang="less">
	.xuanji{
		width: 710/50rem;
		ul{
			li{
				height: 175/50rem;
				width: 710/50rem;
				padding-top: 10/50rem;
				box-sizing: border-box;
				border-bottom: 1/50rem solid #DDD;
				overflow: hidden;
				img{
					width: 250/50rem;
					height: 155/50rem;
					float: left;
					margin-right: 10/50rem;
				}

				.xuanjiright{
					height: 155/50rem;
					width: 450/50rem;
					float: right;
					h1{
						font-size: 26/50rem;
						color:#a54be8;
						line-height: 40/50rem;
					}
					p{
						font-size: 24/50rem;
						color: #959595;
						width: 450/50rem;
						line-height: 40/50rem;
						height: 125/50rem;
						display: -webkit-box;
						-webkit-line-clamp:3;
						text-overflow:ellipsis;
						overflow: hidden;
						-webkit-box-orient:vertical;
					}
				}
			}
		}
	}
</style>