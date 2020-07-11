<template>
    <div>
    <vs-table stripe :data="Assessments">
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
                <vs-td :data="i.name">
                    {{i.name}}
                    <template slot="edit">
                            <vs-input v-model="i.name" :placeholder="i.name"/>
                    </template>
                </vs-td>

                <vs-td :data="i.Weight">
                    {{i.Weight}}%
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

                <vs-td :data="i.CurrentGrade">
                    {{i.CurrentGrade}}
                </vs-td>

                <vs-td :data="i.DueDate">
                    {{i.DueDate}} {{i.DueTime}}
                    <template slot="edit">
                        <div>
                            <el-date-picker
                                    v-model="i.DueDate"
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
        data:()=>({
            Assessments:[
                {
                    "id": 1,
                    "name": "Assignment1",
                    "Weight": 20,
                    "CurrentGrade": "No Grade Recorded",
                    "DueDate": "07/20/2020",
                    "DueTime": "11:59 PM",
                    "isCompleted": "nAH"
                },
                {
                    "id": 2,
                    "name": "Assignment2",
                    "Weight": 20,
                    "CurrentGrade": "No Grade Recorded",
                    "DueDate": "07/20/2020",
                    "DueTime": "11:59 PM",
                    "isCompleted": "nAH"
                },
                {
                    "id": 3,
                    "name": "Assignment3",
                    "Weight": 20,
                    "CurrentGrade": "No Grade Recorded",
                    "DueDate": "07/20/2020",
                    "DueTime": "11:59 PM",
                    "isCompleted": "nAH"
                },
                {
                    "id": 5,
                    "name": "Midterm",
                    "Weight": 20,
                    "CurrentGrade": "No Grade Recorded",
                    "DueDate": "07/20/2020",
                    "DueTime": "11:59 PM",
                    "isCompleted": "nAH"
                },
                {
                    "id": 5,
                    "name": "Lab",
                    "Weight": 20,
                    "CurrentGrade": "No Grade Recorded",
                    "DueDate": "2020-07-21",
                    "DueTime": "11:59 PM",
                    "isCompleted": "nAH"
                },
                {
                    "id": 6,
                    "name": "Exam",
                    "Weight": 20,
                    "CurrentGrade": "No Grade Recorded",
                    "DueDate": "07/20/2020",
                    "DueTime": "11:59 PM",
                    "isCompleted": "nAH"
                },

            ]
        })
    }
</script>
