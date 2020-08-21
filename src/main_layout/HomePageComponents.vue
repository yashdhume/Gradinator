<template>
    <v-container fluid>
        <v-flex style="padding-top: 15%">
            <v-row>
                <v-col align="center"
                       justify="center"
                       style="height: 100vh;"
                >
                    <lottie :options="logoOptions"
                            :height="200"
                            :width="600"
                            style="padding-right: 4rem"
                    />
                    <p class="text-center ma-5" style="color: white">Slashing all your Grade Needs.</p>
                    <v-col>
                        <v-btn dark outlined @click.stop="openLogin" style="margin: .5rem">Login</v-btn>
                        <v-btn dark outlined to="/registration" style="margin: .5rem">Register</v-btn>
                    </v-col>
                </v-col>
            </v-row>
        </v-flex>
        <Login/>
    </v-container>
</template>

<script>
    import FullLogoWhite from "../assets/animations/FullLogoWhite";
    import Lottie from "vue-lottie";
    import {EventBus} from "../store/eventBus";
    import Login from "../components/popups/Login";

    export default {
        name: "HomePageComponents",
        components: {Login, Lottie},
        data: () => ({
            logoOptions: {animationData: FullLogoWhite, loop: false},
        }),
        methods:{
            openLogin:()=>{
                EventBus.$emit("openLogin")
            }
        }
    }
</script>

<style scoped>

</style>
