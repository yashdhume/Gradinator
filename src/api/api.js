import axios from 'axios';
const site = "https://gradinator.herokuapp.com";

//documentation
export async function getDocs(){
    return axios.get(site + '/docs').then(r=>{return r.data});
}

//course
export async function getCourses(){
    return axios.get(site + '/courses').then(r=>{return r.data});
}

export async function enrollCourse(courseId, token) {
    return axios
        .post(site + '/gradebook/enroll?' + "&courseId=" + courseId, {},
            {headers: {...token}})
        .then(r => {return r.data});
}

export async function createCourse(courseData) {
    return axios.post(site+ "/courses/createCourse?" + {...courseData}).then(r=>{return r.data});
}

//gradebook
export async function getGradebookCourses(token){
    return axios
        .get(site + '/gradebook', {headers: {...token}})
        .then(r => {return r.data});
}
export async function getGradebookCourseData(courseId, token){
    return axios
        .get(site + "/gradebook/course?courseId="+courseId, {headers: {...token}})
        .then(r => {return r.data});
}
export async function submitGradebook(assessmentId, changeData, token) {
    return axios
        .post(site + "/gradebook/course/editGrade?assessmentId="+assessmentId+"&"+ {...changeData}, {},
            {headers: {...token}})
        .then(r => {return r.data});
}

//majors
export async function getMajors(){
    return axios.get(site + '/majors').then(r=>{return r.data});
}

//universities
export async function getUniversities(){
    return axios.get(site + "/universities").then(r=>{return r.data});
}
