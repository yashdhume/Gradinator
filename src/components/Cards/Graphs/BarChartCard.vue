<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-align="center" vs-justify="center" vs-w="6">
            <vs-card class="cardx">
                <div slot="header">
                    <h4>Grades</h4>
                </div>
                <div>
                    <BarChart/>
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    import BarChart from "../../../component/Graphs/BarChart";

    export default {
        name: "BarChartCard",
        components: {BarChart}
    }
</script>
