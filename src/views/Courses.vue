<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <div v-for="i in courseData.data.courses" :key="i">
            <CourseCard v-bind:course="i"/>
        </div>

    </vs-row>
</template>

<script>
    import CourseCard from "../component/Cards/CourseCard";
    import {mapState} from "vuex";

    export default {
        mounted() {
            this.$store.dispatch('loadCourses')
        },
        computed:{
            ...mapState([
                'courseData'
            ])
        },
        name: "Courses",
        components: {CourseCard},
    }
</script>

<style scoped>

</style>
