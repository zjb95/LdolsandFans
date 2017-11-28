<template>
	<div class="searchDetemplate">
		<ul>
			<li v-for='(item,index) in searchInfo' :key="index">
				<img :src='item.posterPicUrl'/>
				<div class="searchDeText">
					<h2>{{item.albumName}}</h2>
					<p>{{item.focus}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'searchDetemplate',
		data(){
			return{
				
			}
		},
		props:{
			searchInfo:{
				type:Array,
				default:function(){
					return [];
				}
			}
		}
	}
</script>
<style scoped lang="less">
.searchDetemplate{
	
	ul{
		margin:10/50rem auto;
		width:710/50rem;
		
		li{
			height:160/50rem;
			padding-top:10/50rem;
			overflow:hidden;
			border-bottom:1/50rem solid #D7D2E0;
			img{
				width:220/50rem;
				height:140/50rem;
				float:left;
				margin-right:12/50rem;
			}
			.searchDeText{
				float:left;
				width:478/50rem;
				h2{
					font-size:28/50rem;
					color:#313131;
				}
				p{
					font-size:24/50rem;
					width:478/50rem;
					color:#959595;
				}
			}
			
		}
	}
}
</style>
