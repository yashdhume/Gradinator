<template>
    <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" style="padding: 20px" >
        <el-form-item label="Course Name" prop="name" required>
            <el-input v-model="ruleForm.name"/>
        </el-form-item>
        <el-form-item>
            <el-col :span="12">
                <el-form-item label="Semester" prop="semester">
                    <el-select v-model="ruleForm.semester" placeholder="Fall">
                        <el-option label="Fall" value="fall"/>
                        <el-option label="Winter" value="winter"/>
                        <el-option label="Spring" value="spring"/>
                        <el-option label="Summer" value="summer"/>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="Year" prop="year" required>
                    <el-date-picker type="year"  format="yyyy" value-format="yyyy" placeholder="Pick a year" v-model="ruleForm.year" size="width: 100%"/>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-col :span="12">
                <el-form-item label="Major" prop="majorId">
                    <el-select v-model="ruleForm.majorId" :placeholder="this.majors[0].name">
                        <el-option v-for="i in this.majors" :key="i" :label="i.name" :value="i.id"/>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="University" prop="universityId">
                    <el-select v-model="ruleForm.universityId" :placeholder="this.universities[0].name">
                        <el-option v-for="i in this.universities" :key="i" :label="i.name" :value="i.id"/>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-col :span="12">
                <el-form-item label="CRN" prop="crn" required style="padding-right: 20px">
                    <el-input v-model="ruleForm.crn"/>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="Course Code" prop="code" required>
                    <el-input v-model="ruleForm.code"/>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-col :span="12" style="padding-right: 20px">
                <el-form-item  label="Room Number" prop="room" required>
                    <el-input v-model="ruleForm.room"/>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="Professor" prop="professor" required>
                    <el-input v-model="ruleForm.professor"/>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
            <el-button @click="$router.push({name: 'Courses'})">Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import {getUniversities, getMajors, createCourse} from "../../api/api";
    export default {
        name: "CreateCourseForm",
        mounted() {
          this.getApiCalls()
        },
        data() {
            return {
                universities: [],
                majors: [],
                courseResponse: {},
                ruleForm: {
                    name: '',
                    semester: [],
                    year: '',
                    majorId: [],
                    universityId: [],
                    crn: '',
                    code: '',
                    room: '',
                    professor: ''
                },
                rules: {
                    name: [
                        {required: true, message: 'Please input Course name', trigger: 'blur'},
                    ],
                    semester: [
                        {
                            required: true,
                            message: 'Please select a semester',
                            trigger: 'blur'
                        }
                    ],
                    year: [
                        {
                            required: true,
                            message: 'Please pick a year',
                            trigger: 'blur'
                        }
                    ],
                    majorId: [
                        {
                            required: true,
                            message: 'Please select a major',
                            trigger: 'blur'
                        }
                    ],
                    universityId: [
                        {
                            required: true,
                            message: 'Please select a university',
                            trigger: 'blur'
                        }
                    ],
                    crn: [
                        {required: true, message: 'Please input a CRN', trigger: 'blur'},
                    ],
                    code: [
                        {required: true, message: 'Please input Course Code', trigger: 'blur'},
                    ],
                    room: [
                        {required: true, message: 'Please input Room Number', trigger: 'blur'},
                    ],
                    professor: [
                        {required: true, message: 'Please input Professor', trigger: 'blur'},
                    ],
                }
            };
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.postCreateCourse();
                        if(this.courseResponse.error){
                            this.$vs.notify({title:'Error',text:this.courseResponse.error,color:'danger',position:'top-right'})
                        }
                        else{
                            this.$vs.notify({title:'Success',text:"Course Created Successfully",color:'success',position:'top-right'})
                            console.log("As")
                            this.$router.push({name: "Courses"})
                            return true;
                        }
                    } else return false;

                });
            },
            getApiCalls(){
                getMajors().then(r=>this.majors=r.majors)
                getUniversities().then(r=>this.universities=r.universities)
            },
            postCreateCourse(){
                createCourse(this.ruleForm).then(r=>this.courseResponse=r)
            }

        }
    }
</script>

<style scoped>

</style>
