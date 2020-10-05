<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <v-card width="750" >
            <form-wizard
                    :start-index.sync="activeIndex"
                    color="#70C95A"
                    error-color="#ff4949"
                    title="Create Course"
                    subtitle=""
                    finish-button-text="Submit"
                    @on-complete="onComplete"
            >
                <wizard-step
                        slot-scope="props"
                        slot="step"
                        :tab="props.tab"
                        :transition="props.transition"
                        :index="props.index">
                    <div slot="active-step"
                         style="display: flex; justify-content:center; align-items: center;">
                        <lottie v-if="props.index === 0"
                                :options="personalDetailsOptions"
                                :height="65"
                                :width="65"/>
                        <lottie v-if="props.index === 1"
                                :options="campusOptions"
                                :height="60"
                                :width="60"/>
                        <lottie v-else-if="props.index === 2"
                                :options="sendOptions"
                                :height="65"
                                :width="65"/>
                    </div>

                </wizard-step>
                    <tab-content title="Course Details" icon="" :before-change="() => validate('createForm')">
                        <CreateCourseForm ref="createForm" @on-validate="onStepValidate"/>
                    </tab-content>
                    <tab-content title="Course Syllabus" icon="" :before-change="() => validate('syllabusRuleForm')">
                        <CreateCourseSyllabus ref="syllabusRuleForm" @on-validate="onStepValidate"/>
                    </tab-content>
                    <tab-content title="Submit" icon="">
                    </tab-content>

            </form-wizard>
        </v-card>
    </vs-row>
</template>

<script>
    import CreateCourseForm from "./CreateCourseForm";
    import Lottie from "vue-lottie";
    import PersonalDetails from "../../../assets/animations/PersonalDetailsAnimation";
    import Campus from "../../../assets/animations/CampusAnimation";
    import SendAnimation from "../../../assets/animations/SendAnimation";
    import CreateCourseSyllabus from "./CreateCourseSyllabus";
    import {createCourse} from "../../../api/api";
    export default {
        name: "CreateCoursePage",
        components: {
            CreateCourseSyllabus,
            CreateCourseForm,
            Lottie
        },
        data() {
            return {
                activeIndex: 0,
                personalDetailsOptions: {animationData: PersonalDetails, loop: false},
                campusOptions: {animationData: Campus, loop: false},
                sendOptions: {animationData: SendAnimation, loop: false},
                animationSpeed: 1
            };
        },
        methods:{
            validate(ref) {
                return this.$refs[ref].validate();
            },
            onComplete(){
                let tempJson=[];
                for(let i =0; i<this.finalModel['selectedDays'].length; i++)
                    tempJson.push({"day": this.finalModel['selectedDays'][i], "startTime": this.finalModel['startTimes'][i], "endTime": this.finalModel['endTimes'][i]})
                delete this.finalModel['selectedDays'];
                delete this.finalModel['startTimes'];
                delete this.finalModel['endTimes']
                this.finalModel.times=JSON.stringify(tempJson)
                this.finalModel['assessments']=JSON.stringify(this.finalModel['assessments'])
                console.log(this.finalModel);
                createCourse(this.finalModel).then(r=>{
                    if(r.error){
                        this.$vs.notify({title:'Error',text:r.error,color:'danger',position:'top-right'})
                    }
                    else{
                        this.$vs.notify({title:'Success',text:"Course Created Successfully",color:'success',position:'top-right'})
                        return true;
                    }
                })
            },
            onStepValidate(validated, model) {
                if (validated) {
                    this.finalModel = { ...this.finalModel, ...model};
                }
            }
        }
    }
</script>

<style scoped>

</style>
