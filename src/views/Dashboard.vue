<template>
    <v-app>
        <IndividualGradeCards/>
        <LineGraphCard/>
        <TempCards/>
    </v-app>
</template>
<script>
    import IndividualGradeCards from "../components/Cards/IndividualGradeCards";
    import LineGraphCard from "../components/Cards/Graphs/LineGraphCard";
    import TempCards from "../component/Cards/TempCards";
    import CourseCard from "../component/Cards/CourseCard";
    export default {
        name: "Dashboard",
        components: {CourseCard,TempCards, IndividualGradeCards, LineGraphCard}
    }
</script>
