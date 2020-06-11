<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <div :key="i" v-for="i in courses">
            <vs-col>
                <IndividualGradeCard
                        v-bind:body-text="i.bodyText"
                        v-bind:color="i.color"
                        v-bind:header-text="i.headerText"
                        v-bind:percent="i.percent"
                />
            </vs-col>
        </div>

    </vs-row>
</template>

<script>
    import IndividualGradeCard from "../../component/Cards/IndividualGradeCard";
    import courseData from '../../ui_data/TempCoursesData';

    export default {
        name: "IndividualGradeCards",
        components: {IndividualGradeCard},
        data: () => ({
            courses: courseData
        }),
    }
</script>
