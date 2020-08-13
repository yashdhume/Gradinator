<template>
    <el-form label-position="top" :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
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
        <el-form-item required label="Select Days" prop="selectedDays">
            <el-checkbox-group v-model="ruleForm.selectedDays">
                <el-checkbox-button  label="Monday" name="selectedDays"/>
                <el-checkbox-button  label="Tuesday" name="selectedDays"/>
                <el-checkbox-button  label="Wednesday" name="selectedDays"/>
                <el-checkbox-button  label="Thursday" name="selectedDays"/>
                <el-checkbox-button  label="Friday" name="selectedDays"/>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item>
            <el-col :span="12">
                <el-row v-for="(i, index) in ruleForm.selectedDays" :key="i" >
                    <el-form-item  prop="startTimes" required :label="'Start Time for ' + i" style="padding-bottom: 1rem">
                        <el-time-picker  format="hh:mm A" value-format="HH:mm" placeholder="Select a time" v-model="ruleForm.startTimes[index]"/>
                    </el-form-item>
                </el-row>
            </el-col>
            <el-col :span="12">
                <el-row v-for="(i, index) in ruleForm.selectedDays" :key="i" label="End Times">
                    <el-form-item  prop="endTimes" required :label="'End Time for ' + i" style="padding-bottom: 1rem">
                        <el-time-picker  format="hh:mm A" value-format="HH:mm" placeholder="Select a time" v-model="ruleForm.endTimes[index]" />
                    </el-form-item>
                </el-row>
            </el-col>
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
            var validateTimes= (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input time'));
                }
                else if (value.length !== this.ruleForm.selectedDays.length) {
                    callback(new Error('Make sure enter all times'));
                }
                else {
                    callback();
                }
            };
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
                    professor: '',
                    selectedDays: [],
                    startTimes: [],
                    endTimes: [],
                },

                rules: {
                    name: [
                        {required: true, message: 'Please input Course name', trigger: 'blur'},
                    ],
                    semester: [
                        {required: true, message: 'Please select a semester', trigger: 'blur'}
                    ],
                    year: [
                        {required: true, message: 'Please pick a year', trigger: 'blur'}
                    ],
                    majorId: [
                        {required: true, message: 'Please select a major', trigger: 'blur'}
                    ],
                    universityId: [
                        {required: true, message: 'Please select a university', trigger: 'blur'}
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
                    selectedDays: [
                        {type: 'array', required: true, message: 'Please select at least one day', trigger: 'change' }
                    ],
                    startTimes: [
                        {validator: validateTimes, trigger: 'blur' }
                    ],
                    endTimes: [
                        {validator: validateTimes, trigger: 'blur' }
                    ],
                }
            };
        },
        methods:{
            validate() {
                return new Promise((resolve) => {
                    this.$refs.ruleForm.validate((valid) => {
                        this.$emit('on-validate', valid, this.ruleForm)
                        resolve(valid);
                    });
                })

            },

            getApiCalls(){
                getMajors().then(r=>this.majors=r.majors)
                getUniversities().then(r=>this.universities=r.universities)
            },
            postCreateCourse(){
                createCourse(this.ruleForm).then(r=>{
                    if(r.error){
                        this.$vs.notify({title:'Error',text:r.error,color:'danger',position:'top-right'})
                    }
                    else{
                        this.$vs.notify({title:'Success',text:"Course Created Successfully",color:'success',position:'top-right'})
                        this.$router.push({name: "Courses"})
                        return true;
                    }
                })
            }

        }
    }
</script>

<style scoped>

</style>
