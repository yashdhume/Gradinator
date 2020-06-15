<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-align="center" vs-justify="center" vs-w="6">
            <vs-card class="cardx">
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

    import BarChartData from "../../../ui_data/BarChartData";
    export default {
        name: "BarChartCard",
        components: {BarChartData}
    }
</script>
