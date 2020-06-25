<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <v-card width="750" >
            <form-wizard
                    :start-index.sync="activeIndex"
                    color="#70C95A"
                    error-color="#ff4949"
                    title="Register"
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
                <tab-content title="Personal details" icon="" :before-change="() => validate('personalDetails')">
                    <PersonalDetailsRegistration ref="personalDetails" @on-validate="onStepValidate"/>
                </tab-content>
                <tab-content title="Pick Your University" icon="">
                    <SchoolCards/>
                </tab-content>
                <tab-content title="Submit" icon="">
                </tab-content>
            </form-wizard>
        </v-card>
    </vs-row>

</template>

<script>
    import Lottie from "vue-lottie";
    import PersonalDetails from "../../animations/PersonalDetailsAnimation";
    import SendAnimation from "../../animations/SendAnimation";
    import Campus from "../../animations/CampusAnimation"
    import PersonalDetailsRegistration from "../../component/Cards/PersonalDetailsRegistration";
    import SchoolCards from "../../components/Cards/SchoolCards";

    export default {
        name: "RegistrationCard",
        components: {
            SchoolCards,
            PersonalDetailsRegistration,
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
        methods: {
            onComplete(){
                this.$store.dispatch('Register', this.finalModel).then((response)=>{
                    console.log(response)
                    if (response.error){
                        this.$vs.notify({title:'Error',text:response.error,color:'danger',position:'top-right'})
                        setTimeout(function(){ location.reload() }, 1000);
                    }
                    else{
                        this.$vs.notify({title:'Success',text:"Account Created",color:'success', position:'top-right'})
                        this.$router.push('/dashboard')
                    }
                })
            },
            validate(ref) {
                return this.$refs[ref].validate();
            },
            onStepValidate(validated, model) {
                if (validated) {
                    this.finalModel = { ...this.finalModel, ...model};
                }
            }
        }
    };
</script>
