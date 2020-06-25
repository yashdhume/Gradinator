<template>
    <div>
        <vs-popup title="Login" :active.sync="isLoginActive">
            <vs-col vs-align="center"
                    vs-justify="center" vs-type="flex" style="flex-direction: column">
                <vs-input icon="account_circle" style="padding-top: 20px; padding-bottom: 20px" placeholder="username" v-model="username"/>
                <vs-input icon="vpn_key" type="password" style="padding-bottom: 20px" placeholder="password" v-model="password"/>
                <div>
                    <vs-button @click="sendLogin">Login</vs-button>
                </div>
            </vs-col>
        </vs-popup>
    </div>
</template>

<script>
    export default {
        name: "Login",
        computed: {
            isLoginActive: {
                get() {
                    return this.$store.state.isLoginPopupOpen;
                },
                set(val) {
                    this.$store.commit('IS_LOGIN_ACTIVE', val)
                }
            }
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
