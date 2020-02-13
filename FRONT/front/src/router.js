import Vue from 'vue'
import Router from 'vue-router'
import WebCamPage from './views/WebCamPage.vue'
import YoutubePage from './views/YoutubePage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', component: YoutubePage},
        { path: '/camera', component: WebCamPage}
    ]
})