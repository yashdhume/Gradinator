<template>
    <modal :name="name" height="auto" :scrollable="true" @before-open="reload" @before-close="update">
        <v-card style="padding: 1rem">
            <h2>{{courseName}}</h2>
            <v-divider/>
            <v-container>
                <v-row>
                    <v-col>
                        <DataWithTitleOnBottom title="Professor" :top-data="professor"/>
                        <DataWithTitleOnBottom title="Room Number" :top-data="roomNumber"/>
                    </v-col>
                    <v-col>
                        <DataWithTitleOnBottom title="Course Code" :top-data="courseCode" />
                        <DataWithTitleOnBottom title="CRN" :top-data="crn"/>
                    </v-col>
                </v-row>
            </v-container>
            <v-sparkline
                    :value="this.grades"
                    :gradient="['purple', 'violet']"
                    :smooth="10"
                    :padding="8"
                    :line-width="2"
                    stroke-linecap="round"
                    gradient-direction="top"
                    type="trend"
                    auto-draw
                    show-labels
                    :label-size="7"
            ></v-sparkline>
            <v-divider/>
            <CourseBreakDownTable :assessments="assessmentGrades.gradedAssessments" :grades="this.grades"/>
        </v-card>
    </modal>
</template>

<script>
    import CourseBreakDownTable from "./CourseBreakDownTable";
    import DataWithTitleOnBottom from "../../../../miscellaneous/DataWithTitleOnBottom";
    import {getGradebookCourseData} from "../../../../../api/api";
    import {mapState} from "vuex";

    import {EventBus} from "../../../../../store/eventBus";
    export default {
        name: "DetailedCourse",
        computed: mapState([
            'token'
        ]),
        components: {DataWithTitleOnBottom, CourseBreakDownTable},
        props:{
            name: String,
            professor: String,
            roomNumber: String,
            courseCode: String,
            crn: String,
            courseName: String,
            id: String,
        },
        created() {
        },
        data:()=>{
            return{
                grades: [],
                assessmentGrades: []
            }
        },
        methods: {
            update: function(){
                EventBus.$emit('reloadSummaryCourse');
            },
            getAllGrades: function(){
                this.grades = this.assessmentGrades.gradedAssessments.map(val => parseFloat((val.grade*100).toPrecision(4)))
            },
            reload: function(){
                getGradebookCourseData(this.id, this.token).then(r=> {this.assessmentGrades = r;this.getAllGrades()})
            }
        },
    }
</script>

<style scoped>

</style>
