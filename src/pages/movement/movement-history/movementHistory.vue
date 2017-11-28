<template>
  <div class="movementHistory"> 
     <h3 class="movementHistory-header">历史记录
          <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/left.png" onclick="window.history.go(-1)">
          <a  @click="getRedact"></a>
      </h3>
    <div class="playerHistory">
      <ul>
        <li v-for="(item,index) in playerData" :key="index" v-if="item.taggle">
          <input  type="checkbox"  v-if="flag" v-model="item.show">      
          <div class="data"><span>{{item.date}}</span></div>
          <p class="playerName">{{item.playerName}}</p>
          <p class="playerTime">{{item.playerTime}}</p>
        </li>
      </ul>
    </div>
    <div class="other" v-if="flag">
      <a  @click="getChecked">全选</a>
      <a  @click="getDelete">删除</a>
    </div>
  </div>
</template>
<script>

export default {
  name: 'movementHistory',
  data () {
    return {
      playerData:[{
        show:false,
        date:"11月18日",
        playerName:"猎场 第27集",
        playerTime:"已经观看少于10分钟",
        taggle:true
      },{
        show:false,
        date:"11月19日",
        playerName:"我不是精英 第10集",
        playerTime:"已经观看少于30分钟",
        taggle:true
      },{
        show:false,
        date:"11月23日",
        playerName:"我的体育老师 第8集",
        playerTime:"已经观看少于40分钟",
        taggle:true
      },{
        show:false,
        date:"11月20日",
        playerName:"九州海上牧云记 第1集",
        playerTime:"已经观看少于5分钟",
        taggle:true
      },{
        show:false,
        date:"11月21日",
        playerName:"拜见宫主大人 第6集",
        playerTime:"已经观看少于20分钟",
        taggle:true
      }],
      flag:false
      
    }
  },methods:{
    getRedact:function(event){
      this.flag=!this.flag;
      
      
      },
    getChecked:function(event){
      for(var j=0;j<this.playerData.length;j++){
        this.playerData[j].show=!this.playerData[j].show;
      }
    },
    getDelete:function(event){
      for(var j=0;j<this.playerData.length;j++){
        if(this.playerData[j].show){
          this.playerData[j].taggle=false;
        }
      }
    }
      
 }  
}
</script>
<style  scoped lang="less">
  .movementHistory{
    height:1333/50rem;
    background:#F2EEF9;
    position:relative;
    .movementHistory-header{
      width:100%;
      height:105/50rem;
      background:#A54BE8;
      color:#F1E7FB;
      font-size:36/50rem;
      text-align:center;
      line-height:105/50rem;
      img{
      display:inline-block;
      width:21/50rem;
        height:37/50rem;
        margin-top:32/50rem;
        margin-left:40/50rem;
        float:left;
      }
      a{
        display:inline-block;
        width:37/50rem;
          height:36/50rem;
        background:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/circle_edit_icon_normal.png
')no-repeat;
        background-size:37/50rem 36/50rem;
        margin-top:32/50rem;
        margin-right:40/50rem;
        float:right;

      }

    }
    .playerHistory{
      ul{
        li{
          width:100%;
          height:200/50rem;
          background:#FFFFFF;
          position:relative;
          input{
            position:absolute;
            width:30/50rem;
            height:30/50rem;
            border-radius:50%;
            left:10/50rem;
            top:126/50rem;

          }
          .data{
            display:block;
            width:100%;
            height:50/50rem;
            line-height:50/50rem;
            font-size:28/50rem;
            color:#959595;
            background:#F2EEF9;
           
            padding-top:20/50rem;
            span{
              padding-left:1rem;
            }
          }
          p{
            font-size:32/50rem;
            color:#313131;
            padding-left:50/50rem;
            padding-top:20/50rem;
            
          }
          .playerTime{
           font-size:28/50rem;
           color:#959595;
           
          }
         
        }
      }
    }
    .other{
      position:absolute;
      width:100%;
      height:105/50rem;
      background:#FFFFFF;
      left:0;
      bottom:0;
      &>a{
        display:block;
        width:50%;
        height:105/50rem;
        float:left;
        font-size:28/50rem;
        color:#313131;
        text-align:center;
        line-height:105/50rem;
      }
      a:last-child{
        font-size:30/50rem;
        color:#E29898;
      }

    }
  }

</style>