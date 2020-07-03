<template>
    <v-app>
        <GroupedSummaryGradeProgressCard/>
        <GradeSummaryLineGraphCard/>
        <GradeSummaryBarGraphCard/>
    </v-app>
</template>
<script>
    import GroupedSummaryGradeProgressCard from "../components/dashboard_components/cards/SummaryGrade/GroupedSummaryGradeProgressCard";
    import GradeSummaryLineGraphCard from "../components/dashboard_components/graphs/GradeSummaryLineGraphCard";
    import GradeSummaryBarGraphCard from "../components/dashboard_components/graphs/GradeSummaryBarGraphCard";
    export default {
        name: "Dashboard",
        components: {GroupedSummaryGradeProgressCard, GradeSummaryLineGraphCard, GradeSummaryBarGraphCard}
    }
</script>
