import Vue from 'vue'
import router from './router'
import App from './App.vue'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
import adapter from 'webrtc-adapter';
import "vue-lazy-youtube-video/dist/style.css"
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.component('LazyYoutubeVideo', LazyYoutubeVideo)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
