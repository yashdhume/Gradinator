<template>
    <el-collapse>
        <el-collapse-item>
            <template slot="title" :style="{'color':  color}">
                <div :style="{'color':  color}">
                    {{title}}
                </div>
            </template>
            <el-collapse v-model="activeNames"  accordion style="margin-left: 25px">
                <div v-for="(i, index) in data" :key="i">
                    <el-collapse-item not-arrow :title='subTitle +" #"+(index+1)'>
                        <JSONPretty :data="i"/>
                    </el-collapse-item>
                </div>
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
            subTitle: String,
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
