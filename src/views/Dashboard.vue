<template>
    <v-app>
        <IndividualGradeCards/>
        <LineGraphCard/>
        <!--        <BarChartCard/>-->
        <TempCards/>
        <DocumentCard/>

    </v-app>
</template>
<script>
    import IndividualGradeCards from "../components/Cards/IndividualGradeCards";
    import LineGraphCard from "../components/Cards/Graphs/LineGraphCard";
    import TempCards from "../component/Cards/TempCards";
    import DocumentCard from "../components/Cards/DocumentCards";
    // import BarChartCard from "../components/BarChartCard";
    export default {
        name: "Dashboard",
        components: {DocumentCard, TempCards, IndividualGradeCards, LineGraphCard}
    }
</script>
