<template>
    <div>
    <vs-table stripe :data="assessments">
        <template slot="header">
            <h3>
                Assessments
            </h3>
        </template>
        <template slot="thead">
            <vs-th>
                Assesment
            </vs-th>
            <vs-th>
                Weight
            </vs-th>
            <vs-th>
                CurrentGrade
            </vs-th>
            <vs-th>
                Due Date
            </vs-th>
            <vs-th>
                isCompleted
            </vs-th>
        </template>

        <template slot-scope="{data}">
            <vs-tr :key="i" v-for="i in data" >
                <vs-td :data="i.assessment.name">
                    {{i.assessment.name}}
                    <template slot="edit">
                            <vs-input v-model="i.name" :placeholder="i.name"/>
                    </template>
                </vs-td>

                <vs-td :data="i.assessment.weight">
                    {{i.assessment.weight*100}}%
                    <template slot="edit">
                        <span style="width: 500px; padding-top: 25px; padding-bottom: 0px">
                            <v-slider
                                    v-model="i.Weight"
                                    :thumb-size="24"
                                    thumb-label
                            ></v-slider>
                        </span>
                    </template>
                </vs-td>

                <vs-td :data="i.grade">
                    {{i.grade*100}}
                </vs-td>

                <vs-td :data="i.assessment.dueDate">
                    {{new Date(i.assessment.dueDate/1000)}} {{i.dueTime}}
                    <template slot="edit">
                        <div>
                            <el-date-picker
                                    v-model="i.assessment.dueDate/1000"
                                    format="MM/dd/yyyy"
                                    value-format="MM/dd/yyyy"
                            />
                            <el-time-picker
                                    v-model="i.DueTime"
                                    format="hh:mm A"
                                    value-format="hh:mm A"
                                    placeholder="11:59 PM"
                            />
                        </div>
                    </template>
                </vs-td>
                <vs-td :data="i.isCompleted">
                    {{i.isCompleted}}
                </vs-td>
            </vs-tr>
        </template>
    </vs-table>
    </div>
</template>

<script>
    export default {
        name: "CourseBreakDownTable",
        props:{
          assessments: Array,
        },
    }
</script>
