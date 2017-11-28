<template>
<div class='clips'>
	<ClipsIndexTips v-if="hidden" :hiddens='hidden' @gethiddens='gethiddens'/>
	<div class="clipsAsideNav" v-if='flag'>
		<img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/menu_logo.png">
		<ul>
			<li @click='clipsIndexTips'>登录</li>
			<li @click='clipsIndexTips'>注册</li>
			<router-link tag="li" to="/movementIndex">动态</router-link>
			<router-link tag="li" to="/circleIndex">圈子</router-link>
			<router-link tag="li" to="/searchIndex">搜索</router-link>
			<router-link tag="li" to="/personalIndex">个人中心</router-link>
		</ul>
	</div>
	<div class="clipsIndex-container" :class="change  ?'':'move'">
		<div class="head">
			<a href="#" class="menu" @click='showAsideNav'></a>
			<span>热榜</span>
			<router-link to="/searchIndex"  class="search" ></router-link>
		</div>
		<div class="carousel">
				<swiper :options="swiperOption"  ref="mySwiper">
    			 <!-- slides -->
			    <swiper-slide><img src="//puui.qpic.cn/tv/0/16155470_1680580/0"></swiper-slide>
			    <swiper-slide><img src="//puui.qpic.cn/tv/0/16303735_1680580/0"></swiper-slide>
			    <swiper-slide><img src="//img1.gtimg.com/v/pics/hv1/251/237/2249/146301911.jpg"></swiper-slide>
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
			  </swiper>
		</div>
		<div class="movie-list">
			<ul @click='getMovies'>
				<router-link tag='li'  v-for='(movie,index) in movies' :class="index%2==0 ?'':'current'"  :to="{name:'clipsXuanji',params:{id:movie.qipuId},query:{index:index}}" :key='index'>
					
						<img :src="movie.picUrl">
						<h5>{{movie.albumName}}</h5>
						<p>{{movie.focus}}</p>
				</router-link>
			</ul>
		</div>
	</div>
	<div class="up_bottom"></div>
	<FooterIndex/>
</div>
</template>
<script type="text/javascript">
import FooterIndex from '../../components/footer.vue'
import ClipsIndexTips from "./clipsIndexTips"
	export default{
		name:"clipsIndex",
		data(){
			return{
				change:true,
				hidden:false,
				flag:false,
				  swiperOption: {
		          autoplay: 3000,
		          grabCursor: true,
		          setWrapperSize: true,
		          autoHeight: true,
		          pagination: '.swiper-pagination',
		          paginationClickable: true,
		          // mousewheelControl: true,
		          observeParents: true,
		          loop:true
		        },

		        movies:[]
			}
		},
		created(){
		
			// var currentUrl = "http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/data/tv.json";

			// var currentUrl =this.HOST+"/top/list.json?apiKey=71c300df4a7f4e89a43d8e19e5458e6f&topType=1&categoryId=2&limit=20";
			// console.log(currentUrl)
			this.$axios.get("http://www.wwtliu.com/sxtstu/news/iqiyi_tv.php")

			.then(res => {
				// console.log(res.data.data)
				this.movies = res.data.data;
				// console.log(this.movies);

			})
			.catch(error =>{
				// console.log(error);
			})
		},
		methods:{
			showAsideNav(event){
				this.flag = !this.flag;
				this.right = this.right?0:-140;
				this.change = !this.change;
			},
			clipsIndexTips(event){
				this.hidden = !this.hidden;
				// console.log(this.hidden)

			},
			 getMovies(event){
		     this.$store.commit("getMovies",this.movies);
		     // console.log(this.movies);
		    },
		    gethiddens(data){
		    	this.hidden = data;
		    }

		},
		components:{
			ClipsIndexTips,
			FooterIndex
		}
	}
</script>
<style  scoped lang='less'>
.up_bottom{
	height:111/50rem;
}
	.clips{
		position:relative;
		overflow: hidden;
	}
	.move{
		transition:0.1s linear;
		transform:translateX(260/50rem);
	}
	.clipsAsideNav{


		position:absolute;
		top:0;
		z-index:666;
		
		animation:move 0.1s linear;
		width:260/50rem;
		height: 26.65rem;
		box-sizing: border-box;
		padding:100/50rem 0;
		background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/menu_bg.png) no-repeat;
		&>img{
			width:170/50rem;
			height:90/50rem;
			margin-left:50/50rem;
			margin-bottom:74/50rem;
		}
		ul{
			li{
				width:140/50rem;
				height:50/50rem;
				margin-left:55/50rem;
				margin-bottom:74/50rem;
				color: #fff;
				font-size: 30/50rem;
				text-align: center;
				
				}
			}
		}
		@keyframes move{
			from{left:-260/50rem;}
			to{left:0;}
		}
	.head{
		width: 100%;
		height: 105/50rem;
		padding:0 30/50rem;
		box-sizing:border-box;
		background: #A54BE8;
		overflow:hidden;
		.menu{
			float: left;
			width: 41/50rem;
			height:30/50rem;
			margin-top:32/50rem;
			background:url("http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/main_menu_normal.png") no-repeat;
			background-size:41/50rem 30/50rem;
			&:hover{
				background:url("http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/main_menu_pressed.png") no-repeat;
				background-size:41/50rem 30/50rem;
			}
		}
		span{
			float:left;
			font-size:36/50rem;
			color:#fff;
			margin-top:22/50rem;
			margin-left:280/50rem;
		}
		.search{
			float: right;
			background:#fff;
			width: 41/50rem;
			height:40/50rem;
			margin-top:32/50rem;
			background: url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/main_search_normal.png) no-repeat;
			background-size:41/50rem 40/50rem;
			&:hover{
				background: url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/main_search_pressed.png) no-repeat;
				background-size:41/50rem 40/50rem;
			}
		}
	}
	.carousel{
		height:300/50rem;
		width:100%;
	}
	.carousel img{
		height:300/50rem;
		width:100%;
	}

	.movie-list{
		width:100%;
		padding:20/50rem;
		box-sizing:border-box;
		&>ul{
			overflow:hidden;
			li{
				width:345/50rem;
				// height:530/50rem;
				float:left;
				padding-bottom: 20/50rem;
				margin-right:20/50rem;
				&.current{
					margin-right:0;
				}


				img{
					width:345/50rem;
				    // height:410/50rem;
				}
				h5{
					font-weight:normal;
					font-size:30/50rem;
					color:#313131;
					line-height: 40/50rem;
					
				}
				p{
					font-size:30/50rem;
					color:#959595;
					line-height: 40/50rem;

				}
			}
		}
	}
</style>