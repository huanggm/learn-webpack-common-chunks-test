<template lang="html">
    <div>
        <h1><a href="/views/pageF/pageF">我是pageF</a></h1>
        <nav>
            <ul>
                <li><router-link to="/views/pageF/pageF/article">article</router-link></li>
                <li><router-link to="/views/pageF/pageF/video">video</router-link></li>
                <li><router-link to="/views/pageF/pageF/novel">novel</router-link></li>
                <li><router-link to="/views/pageF/pageF/car">car</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import vHeader from 'components/header.vue'

export default {
    components: {
        vHeader
    }

}
</script>

<style lang="css">
</style>
