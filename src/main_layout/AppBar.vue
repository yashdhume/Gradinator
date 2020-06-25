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
            <v-btn @click.stop="activeLogin"><Login/>Login</v-btn>
        </v-app-bar>
    </header>


</template>

<script>
    import Lottie from "vue-lottie";
    import FullLogo from "../animations/FullLogo";
    import Login from "../views/Login";
    export default {
        name: "AppBar",
        components: {Lottie, Login},
        methods: {
            activeDrawer() {
                this.$store.commit('IS_DRAWER_ACTIVE', true);
            },
            activeLogin(){
                this.$store.commit('IS_LOGIN_ACTIVE', true)
            }

        },
        data: () => ({
            logoOptions: {animationData: FullLogo, loop: false},
            popup:false
        }),
    }
</script>
