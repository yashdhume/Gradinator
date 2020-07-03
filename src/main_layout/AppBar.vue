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
            <v-btn @click.stop="activeLogin"><Login/>Login</v-btn>
        </v-app-bar>
    </header>


</template>

<script>
    import Lottie from "vue-lottie";
    import FullLogo from "../assets/animations/FullLogo";
    import Login from "../components/popups/Login";
    export default {
        name: "AppBar",
        components: {Lottie, Login},
        methods: {
            activeDrawer() {
                this.$store.commit('IS_DRAWER_ACTIVE', true);
            },
            activeLogin(){
                this.$store.commit('IS_LOGIN_ACTIVE', true)
            },


        },

        watch:{
            progressBarChoice(val){
                this.$store.commit('IS_PROGRESS_BAR_DYNAMIC_CHOICE', val)
            }
        },
        data: () => ({
            logoOptions: {animationData: FullLogo, loop: false},
            popup:false,
            progressBarChoice: false,
        }),
    }
</script>
