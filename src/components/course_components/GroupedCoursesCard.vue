<template>
    <vs-row vs-align="center"
            vs-justify="space-around" vs-type="flex">
        <div v-for="i in this.courses" :key="i">
            <CourseCard
                    :course="i"
                    :enrolled-courses.sync="enrolledCourses"
                    :can-enroll="isSignedIn()"
                    @enroll="enroll"/>
        </div>
    </vs-row>
</template>

<script>
    import CourseCard from "./CourseCard";
    import {enrollCourse, getCourses, getEnrolledCourses} from "../../api/api";
    import {mapState} from "vuex";
    import {EventBus} from "../../store/eventBus";

    export default {
        computed: {
            ...mapState([
                'token',
            ])
        },
        data(){
            return {
                courses: [],
                enrolledCourses: [],
            }
        },
        created() {
            getCourses().then(x => { this.courses = x.courses; });
            getEnrolledCourses(this.$store.state.token).then(x => {
                if(!x.error){ this.enrolledCourses = x.courses; }
            });
        },
        methods: {
            enroll: function(courseId){
                EventBus.$emit('openLogin');
                enrollCourse(courseId, this.$store.state.token).then(res => {
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
