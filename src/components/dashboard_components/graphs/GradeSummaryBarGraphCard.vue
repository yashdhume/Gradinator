<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-align="center" vs-justify="center" vs-w="10">
            <vs-card actionable>
                <div slot="header">
                    <h5>Grades</h5>
                </div>
                <div>
                    <BarChartData/>
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>

    import BarChartData from "./data/GradeSummaryBarGraphData";
    export default {
        name: "GradeSummaryLineGraphCard",
        components: {BarChartData}
    }
</script>
