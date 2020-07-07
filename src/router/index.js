import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>import(/* webpackChunkName: "group-foo" */ 'Pages/home/index.vue')
const Community = () =>import(/* webpackChunkName: "group-foo" */ 'Pages/community/index.vue')
Vue.use(VueRouter)

  const routes = [
  {path:'/',redirect:'/home'},
  // {path:'/login',component:Login},
  {
    path: '/',
    component: Home,
    // children:[
    //   {path:'/home',component:Home},
    // ],
  },
  {
    path: '/community',
    component: Community
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next)=>{
//   // to将要访问的路径
//   // from代表从哪个路径跳转来
//   // next()放行 next('/login')强制跳转
//   if(to.path == '/login') return next();
//   // 获取token
//   const tokenstr = window.sessionStorage.getItem('token')
//   if(!tokenstr) return next('/login')
//   next()
// })

export default router
