import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/views/pageD/pageD',
        component: require('src/views/pageD/components/content.vue'),
        children: [
            {
                path: 'article',
                component: require('src/views/pageD/components/article.vue')
            },
            {
                path: 'video',
                component: require('src/views/pageD/components/video.vue')
            },
            {
                path: 'novel',
                component: require('src/views/pageD/components/novel.vue')
            },
            {
                path: 'car',
                component: require('src/views/pageD/components/car.vue')
            }
        ]
    },
    {
        path: '*',
        redirect: '/views/pageD/pageD'
    }
]


Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
