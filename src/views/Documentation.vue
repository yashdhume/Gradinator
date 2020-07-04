<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-xs="12">
            <vs-collapse>
                    <div v-for="i in this.endpointGroups" :key="i">
                        <vs-collapse-item>
                            <div slot="header">{{i.name}}</div>
                            <GroupedEndpoints v-bind:endpoints="i.endpoints"></GroupedEndpoints>
                        </vs-collapse-item>
                    </div>

            </vs-collapse>
        </vs-col>
    </vs-row>
</template>

<script>
    import GroupedEndpoints from "../components/endpoint_components/GroupedEndpoints";
    import {getDocs} from "../api/api";

    export default {
        name: "Documentation",
        components: {GroupedEndpoints},
        created() {
            getDocs().then(x => {
                console.log(x);
                this.endpointGroups = x.endpointGroups
            });
        },
        data(){
            return{
                endpointGroups: Array,
            }
        }
    }
</script>

<style scoped>

</style>
