<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-align="center" vs-justify="center" vs-w="6">
            <vs-card actionable class="cardx">
                <div slot="header">
                    <h4>Grade Summary</h4>
                </div>
                <div>
                    <LineGraph/>
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    import LineGraph from "../../../component/Graphs/LineGraph";

    export default {
        name: "LineGraphCard",
        components: {LineGraph}
    }
</script>
