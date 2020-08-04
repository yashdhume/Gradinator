<template>
    <div>
        <vs-table stripe :data="assessments">
            <template slot="header">
                <h3>
                    Assessments
                </h3>
                <vs-spacer/>
            </template>
            <template slot="thead">
                <vs-th>
                    Assessment
                </vs-th>
                <vs-th>
                    Weight
                </vs-th>
                <vs-th>
                    CurrentGrade
                </vs-th>
                <vs-th>
                    Due Date
                </vs-th>
                <vs-th>
                    isCompleted
                </vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :key="i" v-for="i in data" >
                    <vs-td :data="i.assessment.name">
                        {{i.assessment.name}}
                    </vs-td>
                    <vs-td :data="i.assessment.weight">
                        {{i.assessment.weight*100}}%
                    </vs-td>
                    <vs-td :data="i.grade">
                        {{parseNumber(i.grade)}}%
                        <div slot="edit"  style="width: 500px; padding-top: 25px; padding-bottom: 0px;">
                            <v-container>

                                <v-row>
                                    <SliderTextBoxCombo v-model="i.grade"/>
                                <div>

                                    <vs-button
                                            @click="submitGrade(i.grade,i.assessment.id)"
                                            color="success"
                                            type="flat"
                                            icon="send"
                                    >
                                        Submit
                                    </vs-button>
                                </div>
                                </v-row>
                            </v-container>
                        </div>
                    </vs-td>

                    <vs-td :data="fakeDate">
                        {{fakeDate.toDateString() + " " + fakeDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}}
                    </vs-td>
                    <vs-td @click.native="i.isCompleted" :data="i.isCompleted">
                        <vs-checkbox @click.native="submitCompletion(!i.isCompleted, i.assessment.id)" color="success" v-model="i.isCompleted"/>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </div>
</template>

<script>
    import {submitGradebook} from "../../../../../api/api";
    import {mapState} from "vuex";
    import SliderTextBoxCombo from "./SliderTextBoxCombo";

    export default {
        name: "CourseBreakDownTable",
        components:{SliderTextBoxCombo},
        props:{
            assessments: Array,
        },
        computed: mapState([
            'token'
        ]),
        data:()=> {
            return {
                fakeDate: new Date(),
            }
        },
        methods:{
            submitGrade: function(grade, assessmentId){
                submitGradebook(assessmentId,{"grade": grade}, this.token);
            },
            submitCompletion: function (isComplete, assessmentId) {
                submitGradebook(assessmentId,{"isCompleted": isComplete}, this.token);
            },
            parseNumber:(number)=> {
                if(number<0.1){
                    return (number*100).toPrecision(2);
                }
                else if(number===1){
                    return 100;
                }
                else{
                    return (number*100).toPrecision(4);
                }
            }
        }
    }
</script>
