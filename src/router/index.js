import Vue from 'vue'
import Router from 'vue-router'
// 片花
import ClipsIndex  from '../pages/clips/clipsIndex'
import Login from '@/pages/clips/Login'
import Register from '@/pages/clips/Register'
import FoundPassword from '@/pages/clips/FoundPassword'
import ClipsXuanji from '@/pages/clips/clipsXuanji'
import XuanjiComment from '@/pages/clips/clipsXuanji/xuanjiComment'
import XuanjiIntro from '@/pages/clips/clipsXuanji/xuanjiIntro'
import Xuanji from '@/pages/clips/clipsXuanji/xuanji'
import Start from '@/pages/clips/start'
import AllReply from '@/pages/clips/clipsXuanji/allReply'
// 搜索
import SearchIndex from '../pages/clips/search/searchIndex'
import SearchMovie from '../pages/clips/search/searchMovie'
import SearchPeople from '../pages/clips/search/searchPeople'
// 圈子
import CircleIndex from '../pages/circle/circleIndex'
import CirclePublish from '../pages/circle/circlePublish'
import CircleContent from '../pages/circle/circleContent'
import City from "../pages/circle/city"
// 动态
import MovementIndex from "../pages/movement/movementIndex"
import MovementComment from "../pages/movement/movement-comment/movementComment"
import MovementCommentWpld from "../pages/movement/movement-comment/movementCommentWpld"
import MovementCommentPlwd from "../pages/movement/movement-comment/movementCommentPlwd"
import MovementLetter from "../pages/movement/movement-letter/movementLetter"
import Single from "../pages/movement/movement-letter/single"
// // 
import ChatMessage from "../pages/movement/movement-letter/chatMessage"
import MovementAttention from "../pages/movement/movement-attention/movementAttention"
import MovementHistory from "../pages/movement/movement-history/movementHistory"
import MovementScan from "../pages/movement/movement-scan/movementScan"
import MovementSystem from "../pages/movement/movement-system/movementSystem"

// 
// 我的  个人中心
import PersonalIndex from "@/pages/personal/personalIndex"
import PersonalStar from "@/pages/personal/personalStar"
import PersonalRegard from "@/pages/personal/personalRegard"
import SheZhi from "@/pages/personal/sheZhi"
import ZiLiao from "@/pages/personal/ziLiao"
import FanKui from "@/pages/personal/fanKui"
import Erweima from "@/pages/personal/erweima"
import Xiugaimima from "@/pages/personal/xiugaimima"
import Xiugaibangding from "@/pages/personal/xiugaibangding"
import Bianjinicheng from "@/pages/personal/bianjinicheng"
import Gexingqianming from "@/pages/personal/gexingqianming"
import Shoujihao from "@/pages/personal/shoujihao"
import Oufenhao from "@/pages/personal/oufenhao"

Vue.use(Router)

export default new Router({
  linkExactActiveClass:"active",
  routes: [
  // 启动页
   {
      path: '/',
      name: 'start',
      component: Start
    },
      // 片花首页
    {
      path: '/clipsIndex',
      name: 'clipsIndex',
      component: ClipsIndex
    },
      {
      path:'/allReply',
      name:'allReply',
      component:AllReply,
    },

    // 搜索
    {
    	path: '/searchIndex',
	    name: 'SearchIndex',
	    component: SearchIndex,
      redirect:{
        name:'searchMovie'
      },
      children:[
          {
            path:'SearchMovie',
            component: SearchMovie,
            name: 'searchMovie'
          },
          {
            path:'SearchPeople',
            component: SearchPeople,
            name: 'searchPeople'
          }
      ]
    },
    // 搜索结束

    // 选集开始
    {
      path:'/clipsXuanji/:id',
       name: 'clipsXuanji',
      component:ClipsXuanji,
      redirect: "/clipsXuanji/:id/xuanjiIntro",
      children:[
          {
            path:'xuanjiComment',
            name:'xuanjiComment',
            component:XuanjiComment
          },
          {
            path:'xuanjiIntro',
            name:'xuanjiIntro',
            component:XuanjiIntro
          },
          {
            path:'xuanji',
            name:'xuanji',
            component:Xuanji
          }
      ]
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 注册
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // 忘记密码
    {
      path: '/password',
      name: 'password',
      component: FoundPassword
    },
    // 圈子
    {
      path: '/circleIndex',
      name: 'CircleIndex',
      component: CircleIndex
    },
    {
      path: '/circlePublish',
      name: 'circlePublish',
      component: CirclePublish
    },
    {
      path:"/circleContent",
      name:'circleContent',
      component:CircleContent
    },
    {
      path:"/city",
      name:'city',
      component:City
    },
    // 动态 
    {
      path: '/movementIndex',
        name: 'movementaIndex',
        component:MovementIndex
    },
    {   //  /movementComment
      path: "/movementComment",
      name: "movementComment",
      component: MovementComment,
      redirect:{
        name:'movementCommentWpld'
      },
      children: [{
        path: "wpld",
        name: "movementCommentWpld",
        component: MovementCommentWpld
          },{
        path: "plwd",
        name: "movementCommentPlwd",
        component: MovementCommentPlwd
      }]
    }, 
    {// /movementLetter
      path: "/movementLetter",
      name: "movementLetter",
      component:  MovementLetter      
    },
    {// /movementLetter
      path: "/single",
      name: "single",
      component:  Single      
    },
    {      
     //  /chatMessage 
      path:"/chatMessage",
      name:"chatMessage",
      component: ChatMessage
    },{// /movementAttention
      path: "/movementAttention",
      name: "movementAttention",
      component:  MovementAttention      
    },{// /movementHistory
      path: "/movementHistory",
      name: "movementHistory",
      component:  MovementHistory     
    },{// /movementScan 
      path: "/movementScan",
      name: "movementScan",
      component:  MovementScan      
    },
    {
      // /movementSystem
      path: "/movementSystem",
      name: "movementSystem",
      component:  MovementSystem      
    },
    // 我的
    {
      path: '/personalIndex',
      name: 'personalIndex',
      component: PersonalIndex      
    },
    {
      path: '/personalRegard',
      name: 'personalRegard',
      component: PersonalRegard
    },
    {
      path: '/personalStar',
      name: 'personalStar',
      component: PersonalStar
    }
    ,
    {
      path: '/sheZhi',
      name: 'sheZhi',
      component: SheZhi
    },
    {
      path: '/ziLiao',
      name: 'ziLiao',
      component: ZiLiao
    },
     {
      path: '/fanKui',
      name: 'fanKui',
      component: FanKui
    },
    {
      path: '/erweima',
      name: 'erweima',
      component: Erweima
    },
    {
      path: '/xiugaimima',
      name: 'xiugaimima',
      component: Xiugaimima
    },
    {
      path: '/xiugaibangding',
      name: 'xiugaibangding',
      component: Xiugaibangding
    },
    {
      path: '/bianjinicheng',
      name: 'bianjinicheng',
      component: Bianjinicheng
    },
    {
      path:'/gexingqianming',
      name:'gexingqianming',
      component:Gexingqianming
    },
    {
      path:'/shoujihao',
      name:'shoujihao',
      component:Shoujihao
    },
    {
       path:'/oufenhao',
      name:'oufenhao',
      component:Oufenhao
    }
  ]
})
