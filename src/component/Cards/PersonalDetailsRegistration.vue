<template>
    <el-form label-position="top" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
        <el-form-item label="First Name" prop="age">
            <el-input v-model="ruleForm.firstName" placeholder="First name"></el-input>
        </el-form-item>
        <el-form-item label="Last Name" prop="age">
            <el-input v-model="ruleForm.lastName" placeholder="Last name"></el-input>
        </el-form-item>
        <el-form-item label="Username" prop="username">
            <el-input v-model="ruleForm.userName" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
            <el-input v-model="ruleForm.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item label="Confirm Password" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="Confirm Password"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "PersonalDetailsRegistration",
        data() {
            var validateEmail = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input email'));
                }
                else if(!/.+@.+\..+/.test(value)){
                    callback(new Error('Not a valid email'));
                }
                else{
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password'));
                }
                else if(!new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})").test(value)){
                    callback(new Error('Password need to have 8 characters, At least 1 lowercase, uppercase, number & symbol'));
                }
                else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please input the password again'));
                }
                else if (value !== this.ruleForm.pass) {
                    callback(new Error('Two inputs don\'t match!'));
                }
                else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    userName: '',
                    email: '',
                    firstName: '',
                    lastName: '',
                },
                rules: {
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
            validate() {
                return new Promise((resolve) => {
                    this.$refs.ruleForm.validate((valid) => {
                        this.$emit('on-validate', valid, this.ruleForm)
                        resolve(valid);
                    });
                })

            }
        }
    }
</script>

<style scoped>

</style>
