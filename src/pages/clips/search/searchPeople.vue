<template>
	<div class="SeaPeopleContainer">
		<SearchTemplate :nav="nav"/>
	</div>
</template>
<script type="text/javascript">
import SearchTemplate from './searchTemplate';
	export default{
		name:'searchPeople',
		data(){
			return{
				nav:{
					one:"昵称",
					two:"偶粉ID号",
					three:"只找大咖"
				}

				
			}
		},
		components:{
			SearchTemplate
		}
	}
</script>
<style scoped lang="less">
.SeaPeopleContainer{
	
	width:100%;
	overflow:hidden;
	
}	
</style>