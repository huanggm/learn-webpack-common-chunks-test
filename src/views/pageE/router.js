import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/views/pageE/pageE',
        component: require('src/views/pageE/components/content.vue'),
        children: [
            {
                path: 'article',
                component: require('src/views/pageE/components/article.vue')
            },
            {
                path: 'video',
                component: require('src/views/pageE/components/video.vue')
            },
            {
                path: 'novel',
                component: require('src/views/pageE/components/novel.vue')
            },
            {
                path: 'car',
                component: require('src/views/pageE/components/car.vue')
            }
        ]
    },
    {
        path: '*',
        redirect: '/views/pageE/pageE'
    }
]


Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
