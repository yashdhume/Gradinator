<template>
    <v-app>
        <AppBar/>
        <Drawer :drawerLinks="drawerLinks"></Drawer>
        <div class="main-container-fluid">
            <router-view></router-view>
        </div>
    </v-app>
</template>

<script>
    import AppBar from "./AppBar";
    import Drawer from "./Drawer";
    import drawerLinks from '../ui_data/DrawerLinks';

    export default {
        name: "Index",
        components: {
            AppBar,
            Drawer
        },
        data: () => ({
            drawerLinks: drawerLinks,
        }),
    }
</script>
