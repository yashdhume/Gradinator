<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-align="center" vs-justify="center" vs-w="6">
            <vs-card actionable class="cardx">
                <div slot="header">
                    <h5>Grade Summary</h5>
                </div>
                <div>
                    <LineGraphData/>
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    import LineGraphData from "../../../ui_data/LineGraphData";

    export default {
        name: "LineGraphCard",
        components: {LineGraphData}
    }
</script>
