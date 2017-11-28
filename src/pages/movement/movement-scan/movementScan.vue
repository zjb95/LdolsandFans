<template>
  <div class="movementScan">
    <!-- <h3 class="movementScan-header">扫一扫 -->
<!--     <router-link :to="{path:'/',name: 'movementIndex'}"> -->
     <!--  <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/left.png" onclick="window.history.go(-1)"> -->
    <!-- </router-link></h3> -->
     <div class="movementScan-header">
      <router-link to="/movementIndex">
        <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/jiantouLeft.png" />
      </router-link>
      <span>扫一扫</span>
    </div>
    <div class="erWeiMa"></div>
  </div>
</template>
<script>
export default {
  name: 'movementScan',
  data () {
    return {
      
    }
  }

} 
</script>
<style  scoped lang="less">
  .movementScan{
    height:1333/50rem;
    background:#F2EEF9;
    .movementScan-header{
      width:100%;
      height:105/50rem;
      line-height:105/50rem;
      background:#A54BE8;
      text-align:center;
      img{
        position:absolute;
        left:38/50rem;
        top:34/50rem;
        width:21/50rem;
        height:37/50rem;  
      }
      span{
        color:#fff;
        font-size:36/50rem;
      }

    }
    .erWeiMa{
      width:100%;
      height:1000/50rem;
      background:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/timg.jpg') no-repeat;
      background-size:100% 1000/50rem;
    }
  }


</style>