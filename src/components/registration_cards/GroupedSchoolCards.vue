<template>
    <v-row cols="6">
        <v-col  align="center" class="space-around">
            <div v-for="i in universityData.data.universities" :key="i">
                <SchoolCard :school-data="i"/>
                <v-spacer/>
            </div>
        </v-col>
    </v-row>
</template>

<script>
    import SchoolCard from "./SchoolCard";
    import {mapState} from "vuex";
    export default {
        name: "GroupedSchoolCards",
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
