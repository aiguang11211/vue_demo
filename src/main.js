// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口js:创建Vue实例
import Vue from 'vue'
import App from './App04.vue'
import './base.css'
import VueResouce from 'vue-resource'

// 声明使用插件
Vue.use(VueResouce)// 内部会给vm对象和组件对象添加一个属性：$http

var vm = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
