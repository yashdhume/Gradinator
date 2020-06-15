<template>
    <div>
        <vs-row vs-justify="center">
            <vs-col type="flex" vs-align="center" vs-justify="center" vs-w="8">
                <div v-for="i in endpoints" :key="i">
                   <DocumentCard :endpoint="i"/>
                </div>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
    import DocumentCard from "../../component/Cards/DocumentCard";
    export default {
        name: "DocumentCards",
        components: {DocumentCard},
        props: {
            endpoints: Array
        },
        data: () => ({
            isPopupActive: false,
            isGet: true,

        }),
    }
</script>

