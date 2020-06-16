<template>
    <div>
        <vs-row vs-justify="center" vs-align="center" style="flex-direction: column;padding: 10px">
            <p class="h6">{{topData}}</p>
            <p class="text-muted">{{title}}</p>
        </vs-row>
    </div>
</template>

<script>
    export default {
        name: "DataWithTitleOnBottom",
        props:{
            topData: String,
            title: String
        }
    }
</script>

<style scoped>

</style>
