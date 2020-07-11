<template>
    <vue-json-pretty
            showLength
            collapsedOnClickBrackets
            showLine
            customValueFormatter
            highlightMouseoverNode
            :data="data"
    >
    </vue-json-pretty>
</template>

<script>
    import VueJsonPretty from 'vue-json-pretty'
    export default {
        name: "JSONPretty",
        components:{VueJsonPretty},
        props:{
            data: Array
        }
    }
</script>

<style scoped>

</style>
