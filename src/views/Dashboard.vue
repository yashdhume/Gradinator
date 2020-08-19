<template>
    <v-app>
        <GroupedSummaryGradeProgressCard/>
        <Todo/>
        <GradeSummaryLineGraphCard/>
        <GradeSummaryBarGraphCard/>
    </v-app>
</template>
<script>
    import GroupedSummaryGradeProgressCard from "../components/dashboard_components/cards/SummaryGrade/GroupedSummaryGradeProgressCard";
    import GradeSummaryLineGraphCard from "../components/dashboard_components/graphs/GradeSummaryLineGraphCard";
    import GradeSummaryBarGraphCard from "../components/dashboard_components/graphs/GradeSummaryBarGraphCard";
    import Todo from "../components/dashboard_components/cards/Todo";
    export default {
        name: "Dashboard",
        components: {Todo, GroupedSummaryGradeProgressCard, GradeSummaryLineGraphCard, GradeSummaryBarGraphCard}
    }
</script>
