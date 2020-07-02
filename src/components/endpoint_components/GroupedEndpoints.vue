<template>
    <div>
        <vs-row vs-justify="center">
            <vs-col type="flex" vs-align="center" vs-justify="center" vs-w="8">
                <div v-for="i in endpoints" :key="i">
                   <EndpointCard :endpoint="i"/>
                </div>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
    import EndpointCard from "./EndpointCard";
    export default {
        name: "GroupedEndpoints",
        components: {EndpointCard},
        props: {
            endpoints: Array
        },
        data: () => ({
            isPopupActive: false,
            isGet: true,

        }),
    }
</script>

