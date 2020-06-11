<template>
    <header class="gridx">
        <v-app-bar clipped-right color="transparent" flat id="AppBar">
            <v-app-bar-nav-icon @click.stop="activeDrawer">
                <v-icon>menu</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>Gradinator</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

    </header>


</template>

<script>
    export default {
        name: "AppBar",
        methods: {
            activeDrawer() {
                this.$store.commit('IS_DRAWER_ACTIVE', true);
            }

        }
    }
</script>
