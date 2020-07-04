<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <div v-for="i in courseData.data.courses" :key="i">
            <CourseCard v-bind:course="i" v-bind:enrolled-courses-id="enrolledCoursesId"/>
        </div>

    </vs-row>
</template>

<script>
    import CourseCard from "./CourseCard";
    import {mapState} from "vuex";

    export default {
        mounted() {
            this.$store.dispatch('loadCourses');
            this.$store.dispatch('loadEnrolledCourses').then(()=>{
                this.enrolledCoursesId = []
                this.$store.state.enrolledCourses.data.courses.forEach(course=>{
                    this.enrolledCoursesId.push(course.course.id)
                });
            })

        },
        computed:{
            ...mapState([
                'courseData',
                'enrolledCourses'
            ])
        },
        name: "GroupedCoursesCard",
        components: {CourseCard},
        data: () => ({
            enrolledCoursesId: [],
        }),
    }
</script>

<style scoped>

</style>
