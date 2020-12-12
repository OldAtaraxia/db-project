import Vue from 'vue'
import axios from 'axios'
import './plugins/axios'
import App from './App.vue'
import './plugins/element'
import router from './router'
import EleForm from 'vue-ele-form'
import EleFormImageUploader from 'vue-ele-form-image-uploader'
import EleFormVideoUploader from 'vue-ele-form-video-uploader'

Vue.config.productionTip = false


Vue.use(EleForm,{
  upload: {
    fileSize: 10
  },
  // 可以在这里设置全局的 image-uploader 属性
  'image-uploader': {
    action: 'https://jsonplaceholder.typicode.com/posts' // 上传地址
  },
  'video-uploader': {
    action: 'https://jsonplaceholder.typicode.com/posts' // 上传地址
  }
})


Vue.component('image-uploader', EleFormImageUploader)
Vue.component('video-uploader', EleFormVideoUploader)


Vue.prototype.$http=axios.create({
  baseURL: 'http://localhost:3000'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
