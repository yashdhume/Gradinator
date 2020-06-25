<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <div v-for="i in universityData.data.universities" :key="i">
            <SchoolCard :school-data="i"/>
        </div>
    </vs-row>
</template>

<script>
    import SchoolCard from "../../component/Cards/SchoolCard";
    import {mapState} from "vuex";
    export default {
        name: "SchoolCards",
        components: {SchoolCard},
        mounted() {
            this.$store.dispatch('loadUniversity')
        },
        computed:{
            ...mapState([
                'universityData'
            ])
        },
    }
</script>

<style scoped>

</style>
