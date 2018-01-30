import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/views/pageG/pageG',
        component: require('src/views/pageG/components/content.vue'),
        children: [
            {
                path: 'article',
                component: require('src/views/pageG/components/article.vue')
            },
            {
                path: 'video',
                component: require('src/views/pageG/components/video.vue')
            },
            {
                path: 'novel',
                component: require('src/views/pageG/components/novel.vue')
            },
            {
                path: 'car',
                component: require('src/views/pageG/components/car.vue')
            }
        ]
    },
    {
        path: '*',
        redirect: '/views/pageG/pageG'
    }
]


Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
