import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

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
