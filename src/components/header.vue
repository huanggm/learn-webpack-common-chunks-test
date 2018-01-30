<template lang="html">
  <h1 v-text="content"></h1>
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: 'header content'
        }
    }
}
</script>

<style lang="css">
    h1 {
        color: red;
    }
</style>
