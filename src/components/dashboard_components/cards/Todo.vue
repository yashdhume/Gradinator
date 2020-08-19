<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-align="center" vs-justify="center" vs-w="10">
            <vs-card>
                <div slot="header">
                    <h5>Todo</h5>
                </div>
                <div>
                    <el-table
                            :data="tableData"
                    >
                        <el-table-column
                                prop="date"
                                label="Date"
                                sortable
                                column-key="date"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="Name">
                        </el-table-column>
                        <el-table-column
                                prop="course"
                                label="Course"
                                :filters="getCourses()"
                                :filter-method="filterCourse"
                                filter-placement="bottom-end">
                            <template slot-scope="scope">
                                <el-tag
                                        disable-transitions>{{scope.row.course}}
                                </el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="Completed"
                                width="100"
                                :filters="[{'text': 'Completed', 'value': true}, {'text': 'Not Completed', 'value': false}]"
                                :filter-method="filterCompleted"
                        >
                            <template slot-scope="scope" style="align-items: center">
                                <vs-checkbox @click.native="!scope.row.complete" color="success"
                                             v-model="scope.row.complete"/>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    export default {
        name: "Todo",
        data: () => {
            return {
                tableData: [{
                    date: '2020-11-06',
                    name: 'Lab2',
                    course: 'Computer Architecture',
                    complete: false,
                }, {
                    date: '2020-11-09',
                    name: 'Assignment',
                    course: 'Quantum',
                    complete: false,
                }, {
                    date: '2020-09-04',
                    name: 'Midterm',
                    course: 'Computer Vision',
                    complete: false,
                }, {
                    date: '2020-10-01',
                    name: 'Lab1',
                    course: 'Computer Architecture',
                    complete: false,
                }]
            }
        },
        methods: {
            filterCourse(value, row) {
                return row.course === value;
            },
            filterCompleted(value, row) {
                return row.complete === value;
            },
            getCourses() {
                return [...new Set(this.tableData.map(i=>i.course))].map(i=>({"text":i, "value": i}))
            },
        }
    }
</script>

<style scoped>

</style>
