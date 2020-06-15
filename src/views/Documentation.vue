<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
            <vs-collapse>
                    <div v-for="i in documentationData.data.endpointGroups" :key="i">
                        <vs-collapse-item>
                            <div slot="header">{{i.name}}</div>
                            <DocumentCard v-bind:endpoints="i.endpoints"></DocumentCard>
                        </vs-collapse-item>
                    </div>

            </vs-collapse>
        </vs-col>
    </vs-row>

</template>

<script>
    import {mapState} from "vuex";
    import DocumentCard from "../components/Cards/DocumentCards";

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
        data: () => ({}),
    }
</script>

<style scoped>

</style>
