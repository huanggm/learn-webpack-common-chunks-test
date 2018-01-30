<template lang="html">
    <div class="article">
        <h2>article</h2>
        <label>a: </label><input type="text" v-model="a">
        <label>b: </label><input type="text" v-model="b">
        <button type="button" @click="clickCalBtn">a+b=</button>
        <span class="result">{{result}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: 0,
            b: 0,
            result: 0
        }
    },
    methods: {
        clickCalBtn() {
            import('components/cal.js').then((cal) => {
                this.result = cal.default(+this.a, +this.b);
            })
        }
    }
}
</script>

<style lang="css">
.article {
    background: green;
    color: red;
}
</style>
