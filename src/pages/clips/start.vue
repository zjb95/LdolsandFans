<template>
	<div>
		<router-link to='/clipsIndex' tag='div' class="start">
			<div class="startLogo"></div>
			<div class="startTitle"></div>
		</router-link>
	</div>
</template>
<script type="text/javascript">
export default {
  name: 'start',
  data () {
  	return {
    }
  }
}	
</script>
<style  scoped lang="less">
	.start{
		width:100%;
		height:1333/50rem;
		background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/start/welcome_bg.png);
		background-size:100% 1333/50rem;
		position:relative;
		.startLogo{
			width:303/50rem;
			height:381/50rem;
			background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/start/welcome_logo.png);
			background-size:303/50rem 381/50rem;
			position:absolute;
			left:30/50rem;
			top:120/50rem;
		}
		.startTitle{
			width:267/50rem;
			height:98/50rem;
			background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/clips-images/start/welcome_logo2.png);
			background-size:267/50rem 98/50rem;
			position:absolute;
			left:70/50rem;
			top:550/50rem;
		}

	}
	
</style>