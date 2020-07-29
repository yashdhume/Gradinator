<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <div :key="item" v-for="(item,index) in this.enrolledCourses.courses">
            <vs-col>
                <SummaryGradeProgressCard
                        v-bind:index="'index'+index"
                        v-bind:prof="item.course.professor"
                        v-bind:roomNumber="item.course.room"
                        v-bind:color="item.course.color"
                        v-bind:header-text="item.course.name"
                        v-bind:grade="dummyGrades[index]"
                />
            </vs-col>
        </div>
    </vs-row>
</template>

<script>
    import SummaryGradeProgressCard from "./SummaryGradeProgressCard";
    import {getGradebookCourses} from "../../../../api/api";
    import {mapState} from "vuex";

    export default {
        name: "GroupedSummaryGradeProgressCard",
        components: {SummaryGradeProgressCard},
        computed: mapState([
            'token'
        ]),
        mounted() {
            this.reload();
        },
        data: () => ({
            enrolledCourses: [],
            dummyGrades:[{currentGrade: 0.75, minimumGrade: 0.6, maximumGrade: 0.87},
                {currentGrade: 0.35, minimumGrade: 0.2, maximumGrade: 0.64},
                {currentGrade: 0.80, minimumGrade: 0.75, maximumGrade: 0.96},
                {currentGrade: 0.45, minimumGrade: 0.35, maximumGrade: 0.52},
                {currentGrade: 0.35, minimumGrade: 0.2, maximumGrade: 0.64},
                {currentGrade: 0.80, minimumGrade: 0.75, maximumGrade: 0.96},
                {currentGrade: 0.45, minimumGrade: 0.35, maximumGrade: 0.52}]
        }),
        methods: {
            reload: function(){
                getGradebookCourses(this.token).then(r=> this.enrolledCourses = r)
                console.log(this.enrolledCourses)
            }
        },

    }
</script>

