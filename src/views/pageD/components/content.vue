<template lang="html">
    <div>
        <h1><a href="/views/pageD/pageD">我是pageD</a></h1>
        <nav>
            <ul>
                <li><router-link to="/views/pageD/pageD/article">article</router-link></li>
                <li><router-link to="/views/pageD/pageD/video">video</router-link></li>
                <li><router-link to="/views/pageD/pageD/novel">novel</router-link></li>
                <li><router-link to="/views/pageD/pageD/car">car</router-link></li>
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
