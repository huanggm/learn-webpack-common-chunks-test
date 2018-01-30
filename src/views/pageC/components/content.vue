<template lang="html">
    <div>
        <h1><a href="/views/pageC/pageC">我是pageC</a></h1>
        <nav>
            <ul>
                <li><router-link to="/views/pageC/pageC/article">article</router-link></li>
                <li><router-link to="/views/pageC/pageC/video">video</router-link></li>
                <li><router-link to="/views/pageC/pageC/novel">novel</router-link></li>
                <li><router-link to="/views/pageC/pageC/car">car</router-link></li>
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
