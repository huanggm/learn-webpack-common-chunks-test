import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/views/pageA/pageA',
        component: require('src/views/pageA/components/content.vue'),
        children: [
            {
                path: 'article',
                component: r => require(['src/views/pageA/components/article.vue'], r)
            },
            {
                path: 'video',
                component: r => require(['src/views/pageA/components/video.vue'], r)
            },
            {
                path: 'novel',
                component: r => require(['src/views/pageA/components/novel.vue'], r)
            },
            {
                path: 'car',
                component: r => require(['src/views/pageA/components/car.vue'], r)
            }
        ]
    },
    {
        path: '*',
        redirect: '/views/pageA/pageA'
    }
]


Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
