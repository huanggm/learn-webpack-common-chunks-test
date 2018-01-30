<template lang="html">
    <div class="content">
        <h1><a href="/views/pageA/pageA">我是pageA</a></h1>
        <nav>
            <ul>
                <li><router-link to="/views/pageA/pageA/article">article</router-link></li>
                <li><router-link to="/views/pageA/pageA/video">video</router-link></li>
                <li><router-link to="/views/pageA/pageA/novel">novel</router-link></li>
                <li><router-link to="/views/pageA/pageA/car">car</router-link></li>
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
.content {
    background: red;
    color: blue;
}
</style>
