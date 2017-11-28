<template>
	<div class="SeaMovieContainer">
		<SearchTemplate :nav="nav" />
	</div>
</template>
<script type="text/javascript">
import SearchTemplate from './searchTemplate';
	export default{
		name:'searchMovie',
		data(){
			return{
				nav:{
					one:"演员",
					two:"片名",
					three:"角色"
				}
			}
		},
		components:{
			SearchTemplate
		}
	}
</script>
<style scoped lang="less">
.SeaMovieContainer{
	width:100%;
	overflow:hidden;
}
</style>