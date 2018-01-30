<template lang="html">
    <div>
        <h1><a href="/views/pageE/pageE">我是pageE</a></h1>
        <nav>
            <ul>
                <li><router-link to="/views/pageE/pageE/article">article</router-link></li>
                <li><router-link to="/views/pageE/pageE/video">video</router-link></li>
                <li><router-link to="/views/pageE/pageE/novel">novel</router-link></li>
                <li><router-link to="/views/pageE/pageE/car">car</router-link></li>
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
