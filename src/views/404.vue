<template>
    <div class="centerx">
        <lottie
                :options="errorOptions"
                :height="500"
                :width="500"/>
    </div>
</template>

<script>
    import Lottie from "vue-lottie";
    import error from "./../animations/404";

    export default {
        name: "404",
        components: {
            Lottie
        },
        data() {
            return {
                activeIndex: 0,
                errorOptions: {animationData: error, loop: true},
                animationSpeed: 1
            };
        }
    };
</script>

