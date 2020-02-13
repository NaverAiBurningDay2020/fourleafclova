import Vue from 'vue'
import router from './router'
import App from './App.vue'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
import "vue-lazy-youtube-video/dist/style.css"

Vue.config.productionTip = false

Vue.component('LazyYoutubeVideo', LazyYoutubeVideo)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
