<template>
    <v-hover>
        <template v-slot="{ hover }">
            <v-card width="400px" :elevation="hover ? 1: 5" class="rounded-xl" style="margin: 10px">
                <v-col align="center" justify="center" style="flex-direction: column; padding-bottom: 1px">
                    <v-row class="text-center justify-content-around" align="center" style="padding: 10px">
                        <vs-chip :color="course.major.color">{{course.major.name}}</vs-chip>
                        <vs-chip color="success">{{course.semester}} {{course.year}}</vs-chip>
                        <h6>🔥 {{course.likeCount}}</h6>
                    </v-row>
                    <div style="padding: 10px"/>
                    <h4>{{course.name}}</h4>
                    <p>{{course.professor}}</p>
                    <vs-divider/>
                    <v-row class="text-center justify-content-around" align="center">
                        <DataWithTitleOnBottom :topData="course.crn" title="CRN"/>
                        <DataWithTitleOnBottom :topData="course.code" title="Course Code"/>
                        <GroupedAvatars :images="images"/>
                    </v-row>
                    <div @click="enrollCourse" v-if="canEnroll">
                        <lottie
                                v-on:animCreated="handleAnimation"
                                style="max-height: 50px"
                                :options="animationOptions"
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
    import EnrollAnimation from "../../assets/animations/EnrollAnimation";
    import Lottie from "vue-lottie";
    import {EventBus} from "../../store/eventBus";

    export default {
        name: "CourseCard",
        components: {GroupedAvatars, DataWithTitleOnBottom, Lottie},
        props: {
            course: Object,
            canEnroll: Boolean,
            enrolledCourses: [],
        },
        mounted(){
            console.log("M:"+this.isEnrolled());
            if(this.isEnrolled()) this.playAnimation();
        },
        update(){
            console.log("U:"+this.isEnrolled());
            if(this.isEnrolled()) this.playAnimation();
            else this.resetAnimation();
        },
        data() {
            return {
                animationSpeed: 0,
                activeIndex: 0,
                animationOptions: {animationData: EnrollAnimation, loop: false, autoplay: false},
                images: ['https://cdn.dribbble.com/users/1709884/screenshots/5070649/scribl_avatar-11.png',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKbRH4Jh9B0D6CXyNByqqfuoKXwcbYsSkHoFwp6fsHabi1cygm&usqp=CAU',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS1_an2x9kdsUqcWy2kGMNUMlYXbyf0Sr9896Tx5uXZbNvIc2L&usqp=CAU',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb_sJKWw_q9tobdfkHLUCvYj3pNVd4EOV8XTxGRhSDpnagZZIs&usqp=CAU',
                    'https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg'
                ]
            }
        },
        methods: {
            handleAnimation: function (anim) {
                this.anim = anim;
            },
            playAnimation(){
                this.anim.play();
            },
            resetAnimation(){
                this.anim.reset();
            },
            enrollCourse() {
                console.log("WTFFFFFFFFFFFFFF");
                EventBus.$emit("openLogin");
                if(this.isEnrolled()) return;
                this.$emit("enroll", this.course.id);
                this.playAnimation();
            },
            isEnrolled(){
                return this.enrolledCourses.map(x => x.course.id).indexOf(this.course.id) !== -1;
            },
        }
    }
</script>

<style lang="scss" scoped>
</style>
