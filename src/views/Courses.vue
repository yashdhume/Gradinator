<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <div :key="i" v-for="i in 50">
            <CourseCard/>
        </div>

    </vs-row>
</template>

<script>
    import CourseCard from "../component/Cards/CourseCard";
    export default {
        name: "Courses",
        components: {CourseCard}
    }
</script>

<style scoped>

</style>
