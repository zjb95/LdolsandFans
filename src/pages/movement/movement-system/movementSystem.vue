<template>
  <div class="movementSystem">
    <!-- <h3 class="movementSystem-header">{{msg}} -->
    <!-- <router-link :to="{path:'/',name: 'movementIndex'}"> -->
<!--       <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/left.png" onclick="window.history.go(-1)"> -->
    <!-- </router-link></h3> -->
    <!-- <MovementCommentWpld/> -->
    <div class="movementSystem-header">
       <router-link to="/movementIndex">
          <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/circle-images/jiantouLeft.png" />
       </router-link>
       <span>消息</span>
    </div>
    <div class="movementSystem-container">

      <div  v-for="infoArr in infoArr">
        <div class="left"></div>
        <div class="right">
            <p class="nickName">系统消息</p>
            <p class="info">{{infoArr.info}}</p>
            <img src="http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/n.png">
            <span>{{infoArr.time}}</span>
        </div>
        
      </div>

      <div  v-for="infoArr1 in infoArr1">
        <div class="left"></div>
        <div class="right">
            <p>系统消息</p>{{infoArr1.message}}
            <span>{{infoArr1.time1}}</span>
        </div>
        
      </div>    
      </div>
  </div>
</template>
<script>
// import MovementCommentWpld from "./movementCommentWpld"
export default {
  name: 'movementSystem',
  data () {
    return {
      msg:'消息',
      infoArr:[
        {
          info:"恭喜你!成功成为我们第100位注册会员,更多惊喜有待你的发现!多多宣传吧!",
          time:"昨天",
          
        }
        
      ],
      infoArr1:[
        {
          time1:"2014/03/12",
          message:"小心社交陷阱!多加注意!"

        }

      ]
      
    }
  }

} 
</script>
<style  scoped lang="less">
  .movementSystem{
    height:1333/50rem;
    background:#F2EEF9;
    .movementSystem-header{
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
    .movementSystem-container{
        margin:28/50rem 20/50rem;
        &>div{
          margin-top:30/50rem;
          overflow:hidden;
          &>div{
            float:left;
          }
          .left{
            width:91/50rem;
            height:91/50rem;
            background:url('http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/movement-images/msg.png') no-repeat;
            background-size:91/50rem 91/50rem;
            margin-right:20/50rem;
            margin-top:25/50rem;    
          }
          .right{
            width:598/50rem;
            border-bottom: 1px solid #E1DDE9;
            box-sizing:border-box;
            padding:28/50rem 32/50rem 30/50rem 0;
            color:#1b1b1b;
            font-size:32/50rem;
                           
            position:relative;
            p{
              color:#000000;
              font-size:28/50rem;
              padding-bottom:28/50rem;
              box-sizing:border-box;
              width:414/50rem;

            }
            .nickName{
              color:#313131;
              font-size:28/50rem;
            }
            .info{
              color:#1b1b1b;
                font-size:32/50rem;
            }
              img{
                display:block;
                width:34/50rem;
                height:34/50rem;
                position:absolute;
                right:32/50rem;
                top:100/50rem;


              }
              span{
                color:#959595;
                font-size:24/50rem;
                position:absolute;
                top:20/50rem;
                right:32/50rem;


              }

            
            

          }
            
      }     
    }
  }

</style>