<template>
<div>
    <vs-card actionable>
        <div slot="header">
            <h3>{{endpoint.path}}</h3>
            <p>{{endpoint.description}}</p>
            <vs-row vs-justify="flex-end">
                <vs-chip :color="endpoint.httpMethod==='POST' ? 'primary': 'success'">
                    {{endpoint.httpMethod}}
                </vs-chip>
            </vs-row>
        </div>
        <vs-col>
            <Split>
                <SplitArea :size="50">
                    <vs-list>
                        <vs-list-header title="Inputs"></vs-list-header>
                        <div v-for="i in endpoint.inputs" :key="i">
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

    </vs-card>
</div>
</template>

<script>
    export default {
        name: "DocumentCard",
        props: {
            endpoint: Array
        }
    }
</script>

<style scoped>

</style>
