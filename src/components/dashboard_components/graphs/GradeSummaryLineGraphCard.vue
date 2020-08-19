<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-align="center" vs-justify="center" vs-w="10">
            <vs-card actionable>
                <div slot="header">
                    <h5>Grade Summary</h5>
                </div>
                <div>
                    <GradeSummaryLineGraphData/>
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    import GradeSummaryLineGraphData from "./data/GradeSummaryLineGraphData";

    export default {
        name: "GradeSummaryBarGraphCard",
        components: {GradeSummaryLineGraphData}
    }
</script>
