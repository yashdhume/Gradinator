import Vue from 'vue'
import axios from "axios";

Vue.use(axios);

const site = "https://gradinator.herokuapp.com";

//documentation
export async function getDocs(){
    return (await fetch(site + "/docs")).json();
}

//course
export async function getCourses(){
    return (await fetch(site + "/courses")).json();
}

export async function enrollCourse(courseId, token) {
    return (await fetch(site + "/gradebook/enroll",{
        headers: { ...token },
        body: {courseId: courseId },
        method: "POST"
    })).json();
}

//gradebook
export async function getEnrolledCourses(token){
    return (await fetch(site + "/gradebook", {
       headers: { ...token },
    })).json();
}