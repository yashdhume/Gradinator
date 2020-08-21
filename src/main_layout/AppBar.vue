<template>
    <header>
        <v-app-bar clipped-right color="transparent" flat id="AppBar">
            <v-app-bar-nav-icon @click.stop="activeDrawer">
                <v-icon>menu</v-icon>
            </v-app-bar-nav-icon>
            <lottie :options="logoOptions"
                    :height="200"
                    :width="200"/>
            <v-spacer></v-spacer>
            <div style="padding: 10px"/>
            <v-btn text color="primary" v-if="!this.$store.state.token.tokenId" @click.stop="openLogin">Login</v-btn>
            <vs-dropdown v-else style="outline: none; box-shadow: none;">
                <vs-avatar badge/>
                <vs-dropdown-menu>
                    <el-dropdown-item style="padding-right: 1rem" v-if="$route.name==='Dashboard'">
                        Progress Bar Design
                        <vs-switch v-model="progressBarChoice" >
                            <span slot="on">Dynamic</span>
                            <span slot="off">Constant</span>
                        </vs-switch>
                    </el-dropdown-item>
                    <vs-dropdown-group vs-collapse vs-label="Edit Course" vs-icon="add">
                        <vs-dropdown-item>
                            Computer Architecture
                        </vs-dropdown-item>
                        <vs-dropdown-item >
                            Computer Graphics
                        </vs-dropdown-item>
                    </vs-dropdown-group>
                    <vs-dropdown-item @click.native="logout">Logout</vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>
            <Login/>
        </v-app-bar>
    </header>
</template>

<script>
    import Lottie from "vue-lottie";
    import FullLogo from "../assets/animations/FullLogo";
    import Login from "../components/popups/Login";
    import {EventBus} from "../store/eventBus";
    import {mapState} from "vuex";

    export default {
        name: "AppBar",
        components: {Lottie, Login},
        computed: mapState([
            'progressBarDynamicChoice'
        ]),
        methods: {
            activeDrawer() {
                this.$store.commit('IS_DRAWER_ACTIVE', true);
            },
            logout(){
                this.$store.commit('SET_TOKEN', {})
                this.$vs.notify({title:'Success',text:"Logged Out",color:'success', position:'top-right'});
                location.reload()
            },
            openLogin(){
                EventBus.$emit("openLogin");
            }
        },
        mounted() {
            this.progressBarChoice = this.progressBarDynamicChoice

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
