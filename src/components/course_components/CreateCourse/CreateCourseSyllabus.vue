<template>
    <el-form label-position="top" :model="syllabusRuleForm" status-icon ref="syllabusRuleForm">
        <el-form-item>
            <div v-for="(i, index) in syllabusRuleForm.assessments" :key="i">
                <el-row>
                    <el-col :span="12">
                        <el-form-item
                                label="Name"
                                :prop="'assessments.' + index + '.name'"
                                :rules="{required: true, message: 'Assessment can not be Empty', trigger: ['blur','change']}"
                        >
                            <el-input v-model="i.name" style="width: 75%"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item
                                label="Weight"
                                style="padding-left: 1rem"
                        >
                            <el-input-number v-model="i.weight" controls-position="right" :min="1" :max="100" :step="5"/>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item
                                label="Frequency"
                                style="padding-top: 1rem; "
                        >
                            <el-select v-model="i.frequency" placeholder="Frequency">
                                <el-option label="Once" value="Once"/>
                                <el-option label="Weekly" value="Weekly"/>
                                <el-option label="Bi-Weekly" value="Bi-Weekly"/>
                                <el-option label="Monthly" value="Monthly"/>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" v-if="i.frequency!=='Once' && i.frequency!==''">
                        <el-form-item
                                label="Amount"
                                style="padding-top: 1rem; padding-left: 1rem"
                        >
                            <el-input-number v-model="i.amount" controls-position="right"   :min="1" :max="100" />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9">
                        <el-form-item
                                :label="i.frequency === 'Once'|| i.frequency === ''? 'Due Date' : 'Start Date'"
                        >
                            <el-date-picker type="date" placeholder="Pick a date" v-model="i.date" value-format="timestamp"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item>
                    <el-button @click.prevent="removeAssessment(i)" style="right:0">Delete</el-button>
                </el-form-item>

                <el-divider style="padding-top: 2rem"/>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button @click="addAssessment">New Assessment</el-button>
        </el-form-item>

    </el-form>
</template>
<script>
    export default {
        name: 'CreateCourseSyllabus',

        data() {
            return {
                syllabusRuleForm: {
                    assessments: [{
                        name: '',
                        weight: 0,
                        frequency: '',
                        amount: 0,
                        date: '',
                    }],
                },
            };
        },
        methods: {
            checkWeight(){
                let total=0;
                this.syllabusRuleForm.assessments.map(val=> total+=val.weight);
                return total;
            },
            validate() {
                if(this.checkWeight()!==100){
                    this.$vs.notify({title:'Error',text:'Make sure weights add up to a hundred',color:'danger',position:'top-right'})
                }
                else {
                    console.log("asd")
                    return new Promise((resolve) => {
                        this.$refs.syllabusRuleForm.validate((valid) => {
                            this.$emit('on-validate', valid, this.syllabusRuleForm)
                            resolve(valid);
                        });
                    })
                }

            },
            removeAssessment(item) {
                var index = this.syllabusRuleForm.assessments.indexOf(item);
                if (index !== -1) {
                    this.syllabusRuleForm.assessments.splice(index, 1);
                }
            },
            addAssessment() {
                this.syllabusRuleForm.assessments.push({
                    name: '',
                    weight: '',
                    frequency: '',
                    amount: 0,
                    date: '',
                });
            }
        }
    }
</script>
