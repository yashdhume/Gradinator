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
                    validate-on-back
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
                    <tab-content title="Course Syllabus" icon="">
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
    export default {
        name: "CreateCoursePage",
        components: {
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
                console.log(this.finalModel)
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
