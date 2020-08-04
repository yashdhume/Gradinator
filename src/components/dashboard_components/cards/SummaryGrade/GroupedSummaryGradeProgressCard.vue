<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <div :key="item" v-for="(item,index) in this.enrolledCourses.courses">
            <vs-col>
                <SummaryGradeProgressCard
                        v-bind:id="item.course.id"
                        v-bind:index="'index'+index"
                        v-bind:prof="item.course.professor"
                        v-bind:roomNumber="item.course.room"
                        v-bind:courseCode="item.course.code"
                        v-bind:color="item.course.color"
                        v-bind:header-text="item.course.name"
                        v-bind:crn="item.course.crn"
                        v-bind:grade="item.gradeReport"
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
        }),
        methods: {
            reload: function(){
                getGradebookCourses(this.token).then(r=> this.enrolledCourses = r)
                console.log(this.enrolledCourses)
            }
        },

    }
</script>

