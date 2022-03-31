<template>
    <div>
        id-{{this.$route.query.id}}  title-{{this.$route.query.title}}
    </div>
</template>

<script>
    export default {
        name : 'MessageDetial',
        mounted(){
            //console.log(this)
        }
    }
</script>

<style scoped>

</style>