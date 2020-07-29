<template>
    <div>
        <vs-row vs-align="center" vs-justify="center">
            <vs-input icon="search" :placeholder="'Search by ' +  this.filterType" v-model="searchValue" :data-lpignore="true"/>
            <div style="padding: 2px;"/>
            <el-dropdown @command="onCommandDropdown">
                <el-button>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="i in this.keys" :key="i" :command="i">
                        Search by {{i}}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </vs-row>
        <div style="padding: 1rem;"/>
        <vs-row vs-align="center"
                vs-justify="space-around" vs-type="flex">
            <div v-for="i in filterBySearch()" :key="i">
                <CourseCard
                        :course.sync="i"
                        :is-enrolled="isEnrolled(i)"
                        @enroll="enroll"/>
            </div>
        </vs-row>
    </div>
</template>

<script>
    import CourseCard from "./CourseCard";
    import {enrollCourse, getCourses, getGradebookCourses} from "../../api/api";
    import {EventBus} from "../../store/eventBus";
    import {mapState} from "vuex";
    export default {
        data(){
            return {
                searchValue: "",
                keys: [],
                filterType: "name",
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
            onCommandDropdown(val) {
                this.filterType=val;
                if(this.filterType==="year") this.searchValue=new Date().getFullYear();
                else this.searchValue="";
            },
            filterBySearch(){
              return this.courses.filter(e=>{
                  if(this.filterType==="major") return e.major.name.toLowerCase().includes(this.searchValue.toLowerCase());
                  else if(this.filterType==="year")return e.year = (parseInt(this.searchValue));
                  return e[this.filterType].toLowerCase().includes(this.searchValue.toLowerCase());
              })
            },
            getKeys(){
                this.keys=[]
                for(const i in this.courses[0]) this.keys.push(i);
                for(const i of ['id', 'assessments', 'enrolled', 'enrolledCount', 'university', 'likeCount']){
                    const index = this.keys.findIndex(item => item === i);
                    if(index !== -1)
                        this.keys.splice(index, 1);
                }
            },
            reload: function(){
                getGradebookCourses(this.token).then(x => {
                    this.enrolledCourses = x.error ? [] : x.courses;
                    getCourses().then(x => {
                        this.courses = x.courses;
                        this.getKeys();
                    });
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
