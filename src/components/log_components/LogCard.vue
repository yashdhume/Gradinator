<template>
    <v-card
            style="margin: 2rem; padding: 0 1rem 1rem 1rem"
    >
        <v-card-text>
            <v-row>
                <div>
                    <div>{{Date(log.processed_at)}}</div>
                    <p  style="font-size: 25px; color: black; padding-top: 1rem">
                        {{log.path}}
                    </p>
                </div>
                <v-spacer/>
                <v-chip :color="!log.output.error? 'rgb(23, 201, 100)' : 'rgb(242, 19, 93)'"
                        style="color: white"
                >
                    {{!log.output.error? 'Success' : 'Error'}}
                </v-chip>
            </v-row>
        </v-card-text>
           <Split>
               <SplitArea :size="50">
                   <p style="color: blue">Inputs</p>
                   <v-divider/>
                   <vue-json-pretty
                           showLength
                           collapsedOnClickBrackets
                           showLine
                           customValueFormatter
                           highlightMouseoverNode
                           :deep="2"
                           :data="log.inputs"
                   >
                   </vue-json-pretty>
               </SplitArea>
               <SplitArea :size="50">
                   <p style="color: red">Outputs</p>
                   <v-divider/>
                   <vue-json-pretty
                           showLength
                           collapsedOnClickBrackets
                           showLine
                           customValueFormatter
                           highlightMouseoverNode
                           :deep="2"
                           :data="log.outputs"
                   >
                   </vue-json-pretty>
               </SplitArea>
           </Split>
    </v-card>
</template>

<script>
    import VueJsonPretty from 'vue-json-pretty'
    export default {
        name: "LogCard",
        components: {VueJsonPretty},
        props:{
            log: Array,
        },
        mounted() {
            console.log(this.log)
        }
    }
</script>

<style scoped>

</style>
