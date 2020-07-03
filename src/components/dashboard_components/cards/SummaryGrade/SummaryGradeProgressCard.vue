<template>
    <vs-card actionable style="width: 500px">
        <div slot="header">
            <vs-row vs-justify="space-around">
                <h5 class="mb-1">{{headerText}}</h5>
                <vs-spacer/>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs"
                                v-on="on">info
                        </v-icon>
                    </template>
                    <span>Hover over for details (Tap on mobile)</span>
                </v-tooltip>
            </vs-row>
        </div>
        <div>
            <span style="display: block">{{prof+ " " +  roomNumber}}</span>
            <span v-if="grade.currentGrade">{{(grade.currentGrade*100).toFixed(2) + "%"}}</span>
            <span v-else style="color:red;font-weight:bold">No Grade Data</span>
        </div>
        <div v-if="grade.currentGrade">
            <GradeProgressBarConstantColor v-if="true" :grade="grade"/>
        </div>

        <div v-else style="height: 20px"/>
    </vs-card>
</template>

<script>
    import GradeProgressBarConstantColor from "./GradeProgressBarConstantColor";
    export default {
        name: "SummaryGradeProgressCard",
        components: {GradeProgressBarConstantColor},
        props: {
            prof: String,
            grade: Array,
            headerText: String,
            roomNumber: String,
            color: String,
        },
        data: () => ({
        }),

    }
</script>
<style>


</style>

