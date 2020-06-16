import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex, axios)
export const store = new Vuex.Store({
    state: {
        isDrawerOpen: false,
        documentationData: {},
        courseData: {},
    },
    actions:{
        loadDocumentation({commit}){
            axios
                .get('https://gradinator.herokuapp.com/docs')
                .then(r=>{
                    console.log(r);
                    commit('SAVE_DOCUMENTATION', r)
                });
        },
        loadCourses({commit}){
            axios
                .get('https://gradinator.herokuapp.com/courses')
                .then(r=>{
                    console.log(r);
                    commit('SAVE_COURSES', r)
                });
        }
    },
    mutations: {
        IS_DRAWER_ACTIVE(state, value) {
            state.isDrawerOpen = value;
        },
        SAVE_DOCUMENTATION(state, value){
            state.documentationData = value;
        },
        SAVE_COURSES(state, value){
            state.courseData = value;
        }
    },
    getters: {},
});
