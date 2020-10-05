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
                                prop="assessment.dueDate"
                                label="Date"
                                sortable
                                column-key="date"
                        >
                            <template slot-scope="scope">
                                <p>{{formatDate(scope.row.assessment.dueDate/1000)}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="assessment.name"
                                label="Name"/>
                        <el-table-column
                                prop="course"
                                label="Course"
                                :filters="getCourses()"
                                :filter-method="filterCourse"
                                filter-placement="bottom-end">
                            <template slot-scope="scope">
                                <el-tag
                                        disable-transitions>{{scope.row.assessment.name}}
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
                                <vs-checkbox @click.native="submitCompletion(!scope.row.isCompleted, scope.row.assessment.id)" color="success" v-model="scope.row.isCompleted"/>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    import {mapState} from "vuex";
    import {getTodo, submitGradebook} from "../../../api/api";

    export default {
        name: "Todo",
        computed: mapState([
            'token'
        ]),
        mounted() {
            this.reload();
        },
        data: () => ({
            tableData: []
        }),
        methods: {
            submitCompletion: function (isComplete, assessmentId) {
                submitGradebook(assessmentId,{"isCompleted": isComplete}, this.token).then(r=>{
                    if(r.error){
                        this.$vs.notify({title:'Error',text:r.error,color:'danger',position:'top-right'})
                    }
                    else{
                        this.$vs.notify({title:'Success',text:"Is Completed Sent Successfully",color:'success',position:'top-right'})
                        return true;
                    }
                });
            },
            formatDate(val) {
                var monthNames = [
                    "January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "October",
                    "November", "December"
                ];
                let date = new Date(val);
                let hours = date.getHours();
                let minutes = date.getMinutes();
                const ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12;
                minutes = minutes < 10 ? '0'+minutes : minutes;
                return `${monthNames[date.getMonth()]} ${date.getDay()} ${date.getFullYear()} ${hours}:${minutes}${ampm}`;
            },
            filterCourse(value, row) {
                return row.assessment.name === value;
            },
            filterCompleted(value, row) {
                return row.isCompleted === value;
            },
            getCourses() {
                return [...new Set(this.tableData.map(i => i.assessment.name))].map(i => ({"text": i, "value": i}))
            },
            reload: function () {
                getTodo(this.token).then(r => this.tableData = r.assessments);
                console.log("RELOAD")
                console.log(this.tableData);
            }
        }
    }
</script>

<style scoped>

</style>
