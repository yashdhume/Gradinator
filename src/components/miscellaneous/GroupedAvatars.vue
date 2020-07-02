<template>
    <div>
        <b-avatar-group overlap="0.55">
            <b-avatar v-for="i in images" :key="i" :src="i"/>
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
ah
