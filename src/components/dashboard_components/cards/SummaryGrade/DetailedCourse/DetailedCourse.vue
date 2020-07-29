<template>
    <modal :name="name" height="auto" :scrollable="true">
        <v-card style="padding: 1rem">
            <h2>{{courseName}}</h2>
            <v-divider/>
            <v-container>
                <v-row>
                    <v-col>
                        <DataWithTitleOnBottom title="Professor" :top-data="professor"/>
                        <DataWithTitleOnBottom title="Room Number" :top-data="roomNumber"/>
                    </v-col>
                    <v-col>
                        <DataWithTitleOnBottom title="Course Code" :top-data="courseCode" />
                        <DataWithTitleOnBottom title="CRN" :top-data="crn"/>
                    </v-col>
                </v-row>
            </v-container>
            <v-sparkline
                    :value="value"
                    :gradient="['purple', 'violet']"
                    :smooth="10"
                    :padding="8"
                    :line-width="2"
                    stroke-linecap="round"
                    gradient-direction="top"
                    type="trend"
                    auto-draw
                    show-labels
                    :label-size="7"
            ></v-sparkline>
            <v-divider/>
            <CourseBreakDownTable/>
        </v-card>
    </modal>
</template>

<script>
    import CourseBreakDownTable from "./CourseBreakDownTable";
    import DataWithTitleOnBottom from "../../../../miscellaneous/DataWithTitleOnBottom";
    export default {
        name: "DetailedCourse",
        components: {DataWithTitleOnBottom, CourseBreakDownTable},
        props:{
            name: String,
            professor: String,
            roomNumber: String,
            courseCode: String,
            crn: String,
            courseName: String,
        },
        data:()=>{
            return{
                value: [0, 50, 40, 30, 20, 50, 100, 98, 72, 34, 10, 91, 52, 100,65],
            }
        }
    }
</script>

<style scoped>

</style>
