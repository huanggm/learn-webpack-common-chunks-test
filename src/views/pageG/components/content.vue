<template lang="html">
    <div>
        <h1><a href="/views/pageG/pageG">我是pageG</a></h1>
        <nav>
            <ul>
                <li><router-link to="/views/pageG/pageG/article">article</router-link></li>
                <li><router-link to="/views/pageG/pageG/video">video</router-link></li>
                <li><router-link to="/views/pageG/pageG/novel">novel</router-link></li>
                <li><router-link to="/views/pageG/pageG/car">car</router-link></li>
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
