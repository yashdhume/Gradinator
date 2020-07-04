<template>
    <header class="gridx">
        <v-app-bar clipped-right color="transparent" flat id="AppBar">
            <v-app-bar-nav-icon @click.stop="activeDrawer">
                <v-icon>menu</v-icon>
            </v-app-bar-nav-icon>
            <lottie :options="logoOptions"
                    :height="200"
                    :width="200"/>
            <v-spacer></v-spacer>
            <vs-switch v-model="progressBarChoice">
                <span slot="on">Dynamic</span>
                <span slot="off">Constant</span>
            </vs-switch>
            <div style="padding: 10px"/>
            <v-btn v-if="!this.$store.state.token.tokenId" @click.stop="openLogin">Login</v-btn>
            <v-btn v-else @click.stop="logout">Logout</v-btn>
            <Login/>
        </v-app-bar>
    </header>


</template>

<script>
    import Lottie from "vue-lottie";
    import FullLogo from "../assets/animations/FullLogo";
    import Login from "../components/popups/Login";
    import {EventBus} from "../store/eventBus";

    export default {
        name: "AppBar",
        components: {Lottie, Login},
        updated() {
            EventBus.$emit("openLogin");
        },
        methods: {
            activeDrawer() {
                this.$store.commit('IS_DRAWER_ACTIVE', true);
            },
            logout(){
                this.$store.commit('SET_TOKEN', {})
            },
            openLogin(){
                console.log("EMIT???????");
                EventBus.$emit("openLogin");
            }
        },

        watch:{
            progressBarChoice(val){
                this.$store.commit('IS_PROGRESS_BAR_DYNAMIC_CHOICE', val)
            }
        },
        data: () => ({
            isLoginActive: false,
            logoOptions: {animationData: FullLogo, loop: false},
            popup:false,
            progressBarChoice: false,
        }),
    }
</script>
