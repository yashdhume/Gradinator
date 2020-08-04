<template>
    <b-progress class="mt-2"  style="height: 20px; border: 0px solid lightgrey; border-radius: 25px;">
        <b-progress-bar
                v-b-tooltip.hover.bottom="`You are guaranteed a ${(grade.minimumGrade*100).toFixed(2)}% in this course`"
                :value="grade.minimumGrade*100" :style="{'background-color': getColor(1-grade.minimumGrade), 'border-radius': '25px',}" >{{(grade.minimumGrade*100).toFixed(0)}}%
        </b-progress-bar>
        <b-progress-bar
                v-b-tooltip.hover.bottom="`You can potentially get ${(grade.minimumGrade*100).toFixed(2)}% - ${(grade.maximumGrade*100).toFixed(2)}%`"
                :value="((grade.currentGrade-grade.minimumGrade)*100)" style="background-color: rgb(230, 233, 237)"/>
        <b-progress-bar v-if="!(grade.minimumGrade>=grade.maximumGrade)" :value="0" >
                <span v-b-tooltip.hover.bottom="`You have a ${(grade.currentGrade*100).toFixed(2)}% in this course`"
                      id="circle"/>
        </b-progress-bar>
        <b-progress-bar v-b-tooltip.hover.bottom="`You can potentially get ${(grade.minimumGrade*100).toFixed(2)}% - ${(grade.maximumGrade*100).toFixed(2)}%`"
                        :value="((grade.maximumGrade-grade.currentGrade)*100)" style="background-color: rgb(230, 233, 237)"/>
        <b-progress-bar
                v-b-tooltip.hover.bottom="`The highest mark you can get is ${(grade.maximumGrade*100).toFixed(2)}% in this course`"
                :value="(1-grade.maximumGrade)*100" :style="{'background-color': getColor(1-grade.maximumGrade), 'border-radius': '25px', }">{{(grade.maximumGrade*100).toFixed(0)}}%
        </b-progress-bar>
    </b-progress>
</template>

<script>
    export default {
        name: "GradeProgressBarDynamicColor",
        props: {
            grade: Array
        },
        methods:{
            getColor(value){
                return ["hsl(", ((1 - value) * 120).toString(10), ",100%,45%)"].join("");
            }
        }
    }
</script>

<style scoped>
    #circle {
        position: absolute;
        width: 30px;
        height: 30px;
        border: 5px solid black;
        border-radius: 25px;
        background: white;
        text-align: center;
        font-size: 14px;
        vertical-align: middle;
        horiz-align: center;
        color: black;
    }
</style>
