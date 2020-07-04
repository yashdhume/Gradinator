<template>
    <div>
        <GroupedCourseCard/>
        <v-btn
                fab
                dark
                style="position: fixed;bottom: 10px; right: 10px; outline: none; "
                color="purple"
                to="/create_course"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
</template>

<script>
    import GroupedCourseCard from "../components/course_components/GroupedCoursesCard";
    import {EventBus} from "../store/eventBus";
    export default {
        name: "Courses",
        components: {GroupedCourseCard},
        data: () => ({
        }),
        created() {
            EventBus.$emit("openLogin");
        }
    }
</script>

<style scoped>

</style>
