<template>
    <el-form label-position="top" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
        <el-form-item label="First Name" prop="age">
            <el-input v-model.number="ruleForm.firstName"></el-input>
        </el-form-item>
        <el-form-item label="Last Name" prop="age">
            <el-input v-model.number="ruleForm.lastName"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="age">
            <el-input v-model.number="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "PersonalDetailsRegistration",
        data() {
            var validateEmail = (rule, value, callback) => {
                if (/.+@.+\..+/.test(value)) {
                    callback(new Error('Please input valid password'));
                } else {
                    if (this.ruleForm.checkPass === '') {
                        this.$refs.ruleForm.validateField('email');
                    }
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password again'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('Two inputs don\'t match!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    email: '',
                    firstName: '',
                    lastName: '',
                },
                rules: {
                    firstName: [{
                        required: true,
                        message: 'First name is required',
                        trigger: 'blur',

                    }],
                    lastName: [{
                        required: true,
                        message: 'Last name is required',
                        trigger: 'blur'
                    }],
                    email:[
                        { validator: validateEmail, trigger: 'blur' },
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>
