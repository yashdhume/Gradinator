<template>
    <v-hover>
        <template v-slot="{ hover }">
            <v-card width="400px" :elevation="hover ? 1: 5" class="rounded-xl" style="margin: 10px">
                <v-col align="center" justify="center" style="flex-direction: column; padding-bottom: 1px">
                    <v-row class="text-center justify-content-around" align="center" style="padding: 10px">
                        <vs-chip :color="course.major.color">{{course.major.name}}</vs-chip>
                        <vs-chip color="success">{{course.semester}} {{course.year}}</vs-chip>
                        <h6>🔥 {{Math.floor(Math.random() * 101)}}</h6>
                    </v-row>
                    <div style="padding: 10px"/>
                    <h4>{{course.name}}</h4>
                    <p>{{course.professor}}</p>
                    <vs-divider/>
                    <v-row class="text-center justify-content-around" align="center">
                        <DataWithTitleOnBottom :topData="course.crn" title="CRN"/>
                        <DataWithTitleOnBottom :topData="course.code" title="Course Code"/>
                        <GroupedAvatars :images="images"></GroupedAvatars>
                    </v-row>
                    <div @click="enrollCourse(course.id)" v-if="$store.state.token.tokenId">
                        <lottie
                                v-on:animCreated="handleAnimation"
                                style="max-height: 50px"
                                :options="enrollOptions"
                                :height="150"
                                :width="150"/>
                    </div>
                </v-col>
            </v-card>
        </template>
    </v-hover>

</template>

<script>
    import DataWithTitleOnBottom from "../miscellaneous/DataWithTitleOnBottom";
    import GroupedAvatars from "../miscellaneous/GroupedAvatars";
    import EnrollAnimation from "../../animations/EnrollAnimation";
    import Lottie from "vue-lottie";

    export default {
        name: "CourseCard",
        components: {GroupedAvatars, DataWithTitleOnBottom, Lottie},
        props: {
            course: Object
        },
        data: () => ({
            animationSpeed: 0,
            activeIndex: 0,
            enrollOptions: {animationData: EnrollAnimation, loop: false, autoplay: false},
            images: ['https://cdn.dribbble.com/users/1709884/screenshots/5070649/scribl_avatar-11.png',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKbRH4Jh9B0D6CXyNByqqfuoKXwcbYsSkHoFwp6fsHabi1cygm&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS1_an2x9kdsUqcWy2kGMNUMlYXbyf0Sr9896Tx5uXZbNvIc2L&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb_sJKWw_q9tobdfkHLUCvYj3pNVd4EOV8XTxGRhSDpnagZZIs&usqp=CAU',
                'https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg'
            ]
        }),
        methods: {
            handleAnimation: function (anim) {
                this.anim = anim;
            },
            stopAnimation() {
                this.anim.stop();
            },
            playAnimation(){
                this.anim.play();
            },
            enrollCourse(val) {
                this.$store.dispatch('enrollCourse', val).then((response) => {
                    if (response.error) {
                        this.$vs.notify({title: 'Error', text: response.error, color: 'danger', position: 'top-right'})
                    } else {
                        this.playAnimation()
                        this.$vs.notify({
                            title: 'Success',
                            text: "Class is enrolled",
                            color: 'success',
                            position: 'top-right'
                        })
                    }
                })

            },

            pauseAnimation() {
                this.anim.pause();
            },
        }
    }
</script>

<style lang="scss" scoped>
</style>
