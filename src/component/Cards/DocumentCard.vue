<template>
    <div>
        <vs-row vs-justify="center">
            <vs-col type="flex" vs-align="center" vs-justify="center" vs-w="8">
                <div v-for="x in endpoints" :key="x">
                    <vs-card actionable>
                        <div slot="header">
                            <h3>{{x.path}}</h3>
                            <p>{{x.description}}</p>
                            <vs-row vs-justify="flex-end">
                                <vs-chip :color="x.httpMethod==='POST' ? 'primary': 'success'">
                                    {{x.httpMethod}}
                                </vs-chip>
                            </vs-row>
                        </div>
                        <vs-col>
                            <Split>
                                <SplitArea :size="50">
                                    <vs-list>
                                        <vs-list-header title="Inputs"></vs-list-header>
                                        <div v-for="i in x.inputs" :key="i">
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
                                        <div v-for="i in x.outputs" :key="i">
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
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
    export default {
        name: "DocumentCard",
        props: {
            endpoints: Array
        },
        data: () => ({
            isPopupActive: false,
            isGet: true,

        }),
    }
</script>

