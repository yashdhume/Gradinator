<template>
    <el-collapse v-model="activeNames" accordion style="padding: 2rem">
            <div v-for="(i, index) in this.endpointGroups" :key="i">
                <el-collapse-item :title="i.name" :name="index">
                    <GroupedEndpoints v-bind:endpoints="i.endpoints"/>
                </el-collapse-item>
            </div>
    </el-collapse>
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
                activeNames: ['1']
            }
        }
    }
</script>

<style scoped>
</style>
