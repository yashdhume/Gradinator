<template>
    <vs-card actionable style="width: 500px">
        <div slot="header">
            <h5 class="mb-1">{{headerText}}</h5>
        </div>
        <div >
            <span style="display: block">{{prof+ " " +  roomNumber}}</span>
            <span v-if="grade.currentGrade">{{(grade.currentGrade*100).toFixed(2) + "%"}}</span>
            <span v-else style="color:red;font-weight:bold">No Grade Data</span>
        </div>
        <b-progress class="mt-2" v-if="grade.currentGrade" style="height: 20px">
            <b-progress-bar :value="grade.minimumGrade*100" variant="success" show-value tile="as"/>
            <b-progress-bar :value="((grade.maximumGrade-grade.minimumGrade)*100)/2-2" variant="warning"/>
            <b-progress-bar v-if="!(grade.minimumGrade>=grade.maximumGrade)" :value="3" variant="dark">{{grade.currentGrade*100}}</b-progress-bar>
            <b-progress-bar :value="((grade.maximumGrade-grade.minimumGrade)*100)/2-1" variant="warning"/>
            <b-progress-bar :value="(1-grade.maximumGrade)*100" variant="danger" show-value/>
        </b-progress>
        <div v-else style="height: 20px"/>
    </vs-card>
</template>

<script>
    export default {
        name: "IndividualGradeCard",
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
