<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <div :key="i" v-for="i in this.enrolledCourses.data.courses">
            <vs-col>

                <IndividualGradeCard
                        v-bind:prof="i.course.professor"
                        v-bind:roomNumber="i.course.room"
                        v-bind:color="i.course.color"
                        v-bind:header-text="i.course.name"
                        v-bind:grade="i.gradeReport"
                />
            </vs-col>
        </div>
    </vs-row>
</template>

<script>
    import IndividualGradeCard from "../../component/Cards/IndividualGradeCard";
    import {mapState} from "vuex";

    export default {
        name: "IndividualGradeCards",
        components: {IndividualGradeCard},
        data: () => ({}),
        mounted() {
            this.$store.dispatch('getEnrolledCourses')
        },
        computed:{
            ...mapState([
                'enrolledCourses'
            ])
        },

    }
</script>
