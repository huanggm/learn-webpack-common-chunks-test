<template lang="html">
    <div>
        <h1><a href="/views/pageB/pageB">我是pageB</a></h1>
        <nav>
            <ul>
                <li><router-link to="/views/pageB/pageB/article">article</router-link></li>
                <li><router-link to="/views/pageB/pageB/video">video</router-link></li>
                <li><router-link to="/views/pageB/pageB/novel">novel</router-link></li>
                <li><router-link to="/views/pageB/pageB/car">car</router-link></li>
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
