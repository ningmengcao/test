// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入element组件
import '../static/css/common.css'// 引入自定义的公用css
import './assets/iconfont/iconfont.css' // 引入自选的图标库
import axios from 'axios' // 请求数据

require('./mock/mock.js') // 引入mock.js文件

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
