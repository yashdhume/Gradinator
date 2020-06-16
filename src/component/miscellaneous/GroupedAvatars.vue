<template>
    <div>
        <b-avatar-group overlap="0.55">

            <b-avatar :src="images[0]"/>
            <b-avatar :src="images[1]"/>
            <b-avatar :src="images[2]"/>
            <b-avatar :src="images[3]"/>
            <b-avatar :src="images[4]"/>
            <b-avatar>+31</b-avatar>
        </b-avatar-group>
    </div>
</template>

<script>
    export default {
        name: "GroupedAvatars",
        props:{
            images: Array
        }
    }
</script>

<style scoped>

</style>
