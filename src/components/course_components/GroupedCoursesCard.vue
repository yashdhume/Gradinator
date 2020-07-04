<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <div v-for="i in this.courses" :key="i">
            <CourseCard
                    :course.sync="i"
                    :is-enrolled="isEnrolled(i)"
                    @enroll="enroll"/>
        </div>
    </vs-row>
</template>

<script>
    import CourseCard from "./CourseCard";
    import {enrollCourse, getCourses, getEnrolledCourses} from "../../api/api";
    import {EventBus} from "../../store/eventBus";
    import {mapState} from "vuex";

    export default {
        data(){
            return {
                courses: [],
                enrolledCourses: [],
            }
        },
        computed: mapState([
            'token'
        ]),
        created() {
            this.reload();
            EventBus.$on("userChange", this.reload);
        },
        methods: {
            reload: function(){
                getEnrolledCourses(this.token).then(x => {
                    this.enrolledCourses = x.error ? [] : x.courses;
                    getCourses().then(x => { this.courses = x.courses; });
                });
            },
            enroll: function(courseId){
                if(this.isSignedIn()){
                    enrollCourse(courseId, this.token).then(res => {
                        if (res.error) {
                            this.$vs.notify({title: 'Error', text: res.error, color: 'danger', position: 'top-right'})
                        } else {
                            this.$vs.notify({
                                title: 'Success',
                                text: "Class is enrolled",
                                color: 'success',
                                position: 'top-right'
                            });
                            this.enrolledCourses = res.courses;
                        }
                    });
                }
                else{
                    EventBus.$emit("openLogin");
                }
            },
            isEnrolled: function(course){
                return this.enrolledCourses.map(x => x.course.id).indexOf(course.id) !== -1;
            },
            isSignedIn: function(){
                return this.token.tokenId !== undefined;
            }
        },
        name: "GroupedCoursesCard",
        components: {CourseCard},
    }
</script>

<style scoped>

</style>
