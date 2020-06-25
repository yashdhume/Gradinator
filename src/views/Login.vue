<template>
    <div>
        <vs-popup title="Login" :active.sync="popup">
            <vs-col vs-align="center"
                    vs-justify="center" vs-type="flex" style="flex-direction: column">
                <vs-input style="padding-top: 20px; padding-bottom: 20px" placeholder="username" v-model="username"/>
                <vs-input type="password" style="padding-bottom: 20px" placeholder="password" v-model="password"/>
                <vs-button @click="sendLogin">Login</vs-button>
            </vs-col>
        </vs-popup>
    </div>
</template>

<script>
    export default {
        name: "Login",
        props:{
          popup: Boolean
        },
        data(){
            return {
                username:'',
                password:'',
            }
        },
        methods: {
            sendLogin(){
                this.$store.dispatch('Login', {username: this.username, password: this.password})

            }
        }
    }
</script>

<style scoped>

</style>
