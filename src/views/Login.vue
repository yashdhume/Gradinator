<template>
    <div>
        <vs-popup title="Login" :active.sync="isLoginActive">
            <vs-col vs-align="center"
                    vs-justify="center" vs-type="flex" style="flex-direction: column">
                <vs-input icon="account_circle" style="padding-top: 20px; padding-bottom: 20px" placeholder="Username" v-model="username"/>
                <vs-input @keyup.enter="sendLogin" icon="vpn_key" type="password" style="padding-bottom: 20px" placeholder="Password" v-model="password"/>
                <vs-button @click="sendLogin" >Login</vs-button>
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
                this.$store.dispatch('Login', {username: this.username, password: this.password}).then((response)=>{
                    if (response.error){
                        this.$vs.notify({title:'Error',text:response.error,color:'danger',position:'top-right'})
                    }
                    else{
                        this.username= '';
                        this.password= '';
                        this.$vs.notify({title:'Success',text:"Logged in",color:'success', position:'top-right'})
                        this.$store.commit('IS_LOGIN_ACTIVE', false)
                        console.log("tokenID: " + this.$store.state.token.tokenId)
                        console.log("tokenSecret: " + this.$store.state.token.tokenSecret)
                    }
                })

            }
        }
    }
</script>

<style scoped>

</style>
