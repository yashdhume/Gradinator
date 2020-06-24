<template>
    <div id="parentx">
        <vs-sidebar :click-not-close="isClosed" :hiddenBackground="isClosed" :reduce="false" :reduce-not-hover-expand="false"
                    class="sidebarx" color="primary" default-index="1"  spacer
                    v-model="isDrawerActive">
            <div class="header-sidebar" slot="header">
                    <lottie v-if="isDrawerActive"
                        :options="logoOptions"
                        :height="150"
                        :width="150"/>
            </div>
            <div :key="i" v-for="(i, index) in drawerLinks">
                <vs-sidebar-item
                        :icon="i.icon"
                        :index="index"
                        :key="`i-${index}`"
                        :to="i.url">
                    <span class="hide-in-minisidebar">{{ i.name }}</span>
                </vs-sidebar-item>
            </div>
        </vs-sidebar>
    </div>
</template>

<script>
    import Lottie from "vue-lottie";
    import MiniLogo from "../animations/MiniLogo";
    export default {
        name: "Drawer",
        components: {Lottie},
        props: {
            drawerLinks: {
                type: Array,
                required: true,
            },
        },
        computed: {
            isDrawerActive: {
                get() {
                    return this.$store.state.isDrawerOpen;
                },
                set(val) {
                    this.$store.commit('IS_DRAWER_ACTIVE', val)
                }
            }
        },
        data: () => ({
            isClosed: false,
            logoOptions: {animationData: MiniLogo, loop: false},

        }),
        methods: {

        }
    }
</script>

<style lang="stylus">
</style>
