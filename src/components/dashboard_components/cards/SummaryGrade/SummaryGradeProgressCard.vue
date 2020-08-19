<template>
    <div>
        <DetailedCourse :name="index" :id="id" :course-code="courseCode" :room-number="roomNumber" :course-name="headerText" :professor="prof" :crn="crn"/>
        <vs-card fixed-height actionable style="width: 25rem">
            <div slot="header" >
                <vs-row vs-justify="space-around">
                    <h5 class="mb-1" @click="$modal.show(index)">{{headerText}}</h5>
                    <v-spacer @click="$modal.show(index)"/>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon v-bind="attrs"
                                    v-on="on">info
                            </v-icon>
                        </template>
                        <span v-if="grade.currentGrade">Hover over bar for details (Tap on mobile). Click anywhere for Course Details and Assessments.</span>
                        <span v-else>Click anywhere for Course Details and Assessments.</span>
                    </v-tooltip>
                </vs-row>
            </div>
            <div @click="$modal.show(index)">
                <span style="display: block">{{prof+ " " +  roomNumber}}</span>

            </div>
            <div @click="$modal.show(index)" v-if="(grade.minimumGrade>=grade.maximumGrade)&&grade.currentGrade" :style='"height:29px; color:"+getColor(grade.currentGrade)+";font-weight:bold"'>
                You have completed the course with {{(grade.currentGrade*100).toFixed(2)}}%
            </div>
            <div v-else-if="grade.currentGrade">
                <GradeProgressBarDynamicColor v-if="isDynamicActivated" :grade="grade"/>
                <GradeProgressBarConstantColor v-if="!isDynamicActivated" :grade="grade"/>
            </div>
            <div @click="$modal.show(index)" v-else style="height: 29px;color:red;font-weight:bold">No Grade Data</div>
        </vs-card>
    </div>
</template>

<script>
    import GradeProgressBarDynamicColor from "./GradeProgressBarDynamicColor";
    import GradeProgressBarConstantColor from "./GradeProgressBarConstantColor";
    import DetailedCourse from "./DetailedCourse/DetailedCourse";
    export default {
        name: "SummaryGradeProgressCard",
        components: {DetailedCourse, GradeProgressBarConstantColor, GradeProgressBarDynamicColor},
        props: {
            prof: String,
            grade: Array,
            headerText: String,
            roomNumber: String,
            color: String,
            index: String,
            courseCode: String,
            crn: String,
            id: String,
        },
        methods:{
            getColor(value){
                return ["hsl(", (value * 120).toString(10), ",100%,45%)"].join("");
            }
        },
        data: () => ({
        }),
        computed: {
            isDynamicActivated: {
                get() {
                    return this.$store.state.progressBarDynamicChoice;
                },

            }
        },

    }
</script>
