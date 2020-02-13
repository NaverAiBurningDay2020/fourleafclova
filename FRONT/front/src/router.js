import VueRouter from "vue-router";
import WebCamPage from './views/WebCamPage.vue'

new Vue({
    router: router
})

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/camera', component: WebCamPage}
    ]
})