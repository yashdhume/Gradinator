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
        <vs-collapse>
            <vs-collapse-item not-arrow>
                <div slot="header">
                    Example Output
                </div>
                <div>
                    <vue-json-pretty
                            showLength
                            collapsedOnClickBrackets
                            showLine
                            customValueFormatter
                            highlightMouseoverNode
                            :data="fakeData"
                    >
                    </vue-json-pretty>
                </div>
            </vs-collapse-item>
        </vs-collapse>
    </vs-card>
</div>
</template>

<script>
    import VueJsonPretty from 'vue-json-pretty'
    export default {
        name: "EndpointCard",
        components: {VueJsonPretty},
        props: {
            endpoint: Array
        },
        data: ()=>({
          fakeData: {"universities":[{"id":"5efd685e1ae51752bef8e98a","name":"Ontario Tech University","logoUrl":"https://pbs.twimg.com/profile_images/1110951821579829253/weqEaAsM_400x400.png"},{"id":"5efd685e1ae51752bef8e98b","name":"University of Toronto","logoUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png"},{"id":"5efd685e1ae51752bef8e98c","name":"University of Waterloo","logoUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/1200px-University_of_Waterloo_seal.svg.png"}]}
        })
    }
</script>

<style scoped>

</style>
