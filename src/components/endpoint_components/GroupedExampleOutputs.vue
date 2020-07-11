<template>
    <el-collapse>
        <el-collapse-item>
            <template slot="title" :style="{'color':  color}">
                <div :style="{'color':  color}">
                    {{title}}
                </div>
            </template>
            <el-collapse v-model="activeNames"  accordion style="margin-left: 25px">

                    <el-collapse-item not-arrow title="Success #1">
                        <JSONPretty :data="data"/>
                    </el-collapse-item>

            </el-collapse>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
    import JSONPretty from "./JSONPretty";
    export default {
        name: "GroupedExampleOutputs",
        components: {JSONPretty},
        props: {
            title: String,
            color: String,
            data: Array,
        },
        data(){
            return {
                activeNames: ['1'],
            }
        }
    }
</script>

<style scoped>

</style>
