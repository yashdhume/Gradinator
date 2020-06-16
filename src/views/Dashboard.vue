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
    export default {
        name: "Dashboard",
        components: {TempCards, IndividualGradeCards, LineGraphCard}
    }
</script>
