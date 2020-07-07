import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'Assets/style/global.css'//引入全局样式
import 'Utils/importComp' // 引入组件库组件
import 'Utils/flexble' // 配置rem 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
