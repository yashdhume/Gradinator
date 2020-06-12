<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
            <DocumentCard v-bind:endpoints="documentationData.data.endpoints[0].courseEndpoints"></DocumentCard>
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
