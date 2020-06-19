<template>
    <vs-card vs-justify="center" vs-align="center"  style="width: 150px" actionable>
        <div style= "padding-left: 35px">
            <v-avatar size="50" >
                <v-img :src="schoolData.image"></v-img>
            </v-avatar>
        </div>
        <h6 style="text-align: center">{{schoolData.name}}</h6>
    </vs-card>
</template>

<script>
    export default {
        name: "SchoolCard",
        props: {
            schoolData: Array
        }
    }
</script>

<style scoped>

</style>
