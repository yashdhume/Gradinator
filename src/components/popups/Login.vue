<template>
    <div>
        <vs-popup title="Login" :active.sync="isActive">
            <vs-col vs-align="center"
                    vs-justify="center" vs-type="flex" style="flex-direction: column">
                <vs-input icon="account_circle" style="padding-top: 20px; padding-bottom: 20px" placeholder="Username" v-model="username"/>
                <vs-input @keyup.enter="sendLogin" icon="vpn_key" type="password" style="padding-bottom: 20px" placeholder="Password" v-model="password"/>
                <vs-checkbox color="success" v-model="stayLoggedIn">Stay Logged In?</vs-checkbox>
                <vs-button type="line" style="outline: none; " @click="sendLogin">Login</vs-button>
                <p style="padding-top: 1rem">Don't have an account?</p>
                <p @click="$router.push({name: 'Registration'}); isActive=false" style="color:blue; cursor:pointer">Create an Account</p>
            </vs-col>
        </vs-popup>
    </div>
</template>

<script>
    import {EventBus} from "../../store/eventBus";

    export default {
        name: "Login",
        data(){
            return {
                isActive: false,
                username: '',
                password: '',
                stayLoggedIn: false,
            }
        },
        created(){
            EventBus.$on("openLogin", ()=>{ this.isActive = true; });
            EventBus.$on("closeLogin", ()=>{ this.isActive = false; });
        },
        methods: {
            sendLogin(){
                this.$store.dispatch('Login', {username: this.username, password: this.password, stayLoggedIn: this.stayLoggedIn}).then((response)=>{
                    if (response.error){
                        this.$vs.notify({title:'Error',text:response.error,color:'danger',position:'top-right'})
                    }
                    else{
                        this.username= '';
                        this.password= '';
                        this.$vs.notify({title:'Success',text:"Logged in",color:'success', position:'top-right'});
                        this.isActive = false;
                        if(this.$route.name==='HomePage')
                            this.$router.push({name: 'Dashboard'})
                        else location.reload()
                    }
                })

            },
        }
    }
</script>

<style scoped>

</style>
