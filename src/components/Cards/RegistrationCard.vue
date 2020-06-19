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
                        <lottie v-if="props.index === 2"
                                :options="personalDetailsOptions"
                                :height="65"
                                :width="65"/>
                        <lottie v-if="props.index === 1"
                                :options="campusOptions"
                                :height="60"
                                :width="60"/>
                        <lottie v-else-if="props.index === 0"
                                :options="doneOptions"
                                :height="65"
                                :width="65"/>
                    </div>
                </wizard-step>
                <tab-content title="Personal details" icon="" >
                    <PersonalDetailsRegistration/>
                </tab-content>
                <tab-content title="Pick Your University" icon="">
                    <SchoolCards/>
                </tab-content>
                <tab-content title="Done" icon="">
                </tab-content>
            </form-wizard>
        </v-card>
    </vs-row>

</template>

<script>
    import Lottie from "vue-lottie";
    import PersonalDetails from "../../animations/PersonalDetailsAnimation";
    import Done from "../../animations/DoneAnimation";
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
                doneOptions: {animationData: Done, loop: false},
                animationSpeed: 1
            };
        },
        methods: {
            onComplete(){
                this.$router.push('/dashboard');
            },
            validate(ref) {
                return this.$refs[ref].validate();
            },
        }
    };
</script>
