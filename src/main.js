// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// 导入css模块
import '@/assets/css/index.css';


Vue.config.productionTip = false
import MyAxios from '@/plugins/myaxios'

Vue.use(MyAxios)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
