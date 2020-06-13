<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">

            <!-- TODO: YASH: Make this not hardcoded -->

            <vs-row vs-justify="center" vs-align="center">
                <h2>Course Endpoints</h2>
            </vs-row>
            <DocumentCard v-bind:endpoints="documentationData.data.endpoints['courseEndpoints']"></DocumentCard>

            <vs-row vs-justify="center" vs-align="center">
                <h2>Assessment Endpoints</h2>
            </vs-row>
            <DocumentCard v-bind:endpoints="documentationData.data.endpoints['assessmentEndpoints']"></DocumentCard>

            <vs-row vs-justify="center" vs-align="center">
                <h2>Users Endpoints</h2>
            </vs-row>
            <DocumentCard v-bind:endpoints="documentationData.data.endpoints['userEndpoints']"></DocumentCard>

           </vs-col>
    </vs-row>

</template>

<script>
    import {mapState} from "vuex";
    import DocumentCard from "../component/Cards/DocumentCard";

    export default {
        name: "Documentation",
        components: {DocumentCard},
        mounted() {
            this.$store.dispatch('loadDocumentation')
        },
        computed:{
            ...mapState([
                'documentationData'
            ])
        },
    }
</script>

<style scoped>

</style>
