<template>
    <v-app>
        <IndividualGradeCards/>
        <LineGraphCard/>
        <!--        <BarChartCard/>-->
        <TempCards/>

    </v-app>
</template>
<script>
    import IndividualGradeCards from "../components/Cards/IndividualGradeCards";
    import LineGraphCard from "../components/Cards/Graphs/LineGraphCard";
    import TempCards from "../component/Cards/TempCards";
    // import BarChartCard from "../components/BarChartCard";
    export default {
        name: "Dashboard",
        components: {TempCards, IndividualGradeCards, LineGraphCard}
    }
</script>
