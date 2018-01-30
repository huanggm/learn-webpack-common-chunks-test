import Vue from 'vue'
import App from './pageF.vue'

import router from './router.js'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
