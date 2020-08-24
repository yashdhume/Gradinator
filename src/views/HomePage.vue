<template>
    <HomePageComponents class="back"/>
</template>

<script>
    import HomePageComponents from "../main_layout/HomePageComponents";
    export default {
        name: "HomePage",
        components: {HomePageComponents},
        beforeCreate() {
            if(this.$store.state.loginData.stayLoggedIn)
                this.$store.dispatch('Login', this.$store.state.loginData).then(()=>{
                    this.$router.push({name: 'Dashboard'})
                })
        }
    }
</script>

<style scoped>
    .back {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

</style>
