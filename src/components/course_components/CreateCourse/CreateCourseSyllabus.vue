<template>
    <el-form label-position="top" :model="syllabusRuleForm" status-icon ref="syllabusRuleForm">
        <el-form-item>
            <div v-for="(i, index) in syllabusRuleForm.assessments" :key="i">
                <el-row>
                    <el-col :span="12">
                        <el-form-item
                                label="Name"
                                :prop="'assessments.' + index + '.name'"
                                :rules="{required: true, message: 'Assessment can not be Empty', trigger: 'blur'}"
                        >
                            <el-input v-model="i.name" style="width: 75%"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item
                                label="Weight"
                                :rules="{required: true, message: 'Weight can not be Empty', trigger: 'blur'}"
                                style="padding-left: 1rem"
                        >
                            <el-input-number v-model="i.weight" controls-position="right" :min="1" :max="100"/>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item
                                label="Frequency"
                                :rules="{required: true, message: 'Assessment can not be Empty', trigger: 'blur'}"
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
                                :rules="{ type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }"
                                :label="i.frequency !== 'Once' ? 'Due Date' : 'Start Date'"
                        >
                            <el-date-picker type="date" placeholder="Pick a date" v-model="i.date"
                                    tyle="width: 100%;"
                            />
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
            validate() {
                return new Promise((resolve) => {
                    this.$refs.syllabusRuleForm.validate((valid) => {
                        this.$emit('on-validate', valid, this.syllabusRuleForm)
                        resolve(valid);
                    });
                })

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
