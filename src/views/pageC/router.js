import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/views/pageC/pageC',
        component: require('src/views/pageC/components/content.vue'),
        children: [
            {
                path: 'article',
                component: require('src/views/pageC/components/article.vue')
            },
            {
                path: 'video',
                component: require('src/views/pageC/components/video.vue')
            },
            {
                path: 'novel',
                component: require('src/views/pageC/components/novel.vue')
            },
            {
                path: 'car',
                component: require('src/views/pageC/components/car.vue')
            }
        ]
    },
    {
        path: '*',
        redirect: '/views/pageC/pageC'
    }
]


Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
