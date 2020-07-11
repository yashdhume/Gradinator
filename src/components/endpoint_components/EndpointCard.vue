<template>
<div>
    <vs-card actionable>
        <div slot="header">
            <vs-row vs-justify="space-between">
                <div>
                    <h5>{{endpoint.path}}</h5>
                    <p>{{endpoint.description}}</p>
                </div>
                <div>
                    <vs-chip v-if="endpoint.requiresAuth" color="warning">
                        Requires Auth
                    </vs-chip>
                    <vs-chip :color="endpoint.httpMethod==='POST' ? 'primary': 'success'">
                        {{endpoint.httpMethod}}
                    </vs-chip>
                </div>
            </vs-row>
        </div>
        <vs-col>
            <Split>
                <SplitArea :size="50">
                    <vs-list>
                        <vs-list-header v-if="endpoint.inputs.length===0 && endpoint.optionalInputs.length===0"
                                        title="No Inputs"
                                        color="danger"/>
                        <vs-list-header v-if="endpoint.inputs.length>0" title="Inputs"/>
                        <div v-for="i in endpoint.inputs" :key="i">
                            <vs-list-item
                                    :title="i.name"
                                    :subtitle="i.description"
                            ></vs-list-item>
                        </div>
                        <vs-list-header v-if="endpoint.optionalInputs.length>0" title="Optional Inputs" color="#B400E3"/>
                        <div v-for="i in endpoint.optionalInputs" :key="i">
                            <vs-list-item
                                    :title="i.name"
                                    :subtitle="i.description"
                            ></vs-list-item>
                        </div>
                    </vs-list>
                </SplitArea>
                <SplitArea :size="50">
                    <vs-list>
                        <vs-list-header title="Outputs"></vs-list-header>
                        <div v-for="i in endpoint.outputs" :key="i">
                            <vs-list-item
                                    :title="i.name"
                                    :subtitle="i.description"
                            ></vs-list-item>
                        </div>
                    </vs-list>
                </SplitArea>
            </Split>

        </vs-col>

        <div slot="footer">
            <vs-row vs-justify="flex-end">
            </vs-row>
        </div>
        <div>
            <Split>
                <SplitArea :size="50" v-if="endpoint.sampleOutputs[0]">
                    <GroupedExampleOutputs title="Example Success Output" :data="endpoint.sampleOutputs[0]" color="rgb(23, 201, 100)"/>
                </SplitArea>
                <SplitArea :size="50" v-if="endpoint.sampleOutputs[1]">
                    <GroupedExampleOutputs title="Example Error Output" :data="endpoint.sampleOutputs[1]" color="rgb(242, 19, 93)"/>
                </SplitArea>
            </Split>
        </div>
        <div style="padding: 10px"/>
    </vs-card>
</div>
</template>

<script>
    import GroupedExampleOutputs from "./GroupedExampleOutputs";
    export default {
        name: "EndpointCard",
        components: {GroupedExampleOutputs},
        props: {
            endpoint: Array
        },
        data: ()=>({

        })
    }
</script>

<style scoped>

</style>
