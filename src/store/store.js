import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import Vuesax from 'vuesax'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

const ls = new SecureLS({isCompression: false});

Vue.use(Vuex, axios, Vuesax)
const site = "https://gradinator.herokuapp.com/";
export const store = new Vuex.Store({
    plugins: [
        createPersistedState({
            paths: ['token', 'progressBarDynamicChoice'],
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        })
    ],
    state: {
        isDrawerOpen: false,
        progressBarDynamicChoice: true,
        documentationData: {},
        courseData: {},
        loginData: {},
        universityData: {},
        token: {},//tokenId, tokenSecret
        enrolledCourses: {},
        enrolledCoursesId: {},
        isLoginPopupOpen: false,
    },
    actions: {
        loadDocumentation({commit}) {
            axios
                .get(site + 'docs')
                .then(r => commit('SAVE_DOCUMENTATION', r));
        },
        loadCourses({commit}) {
            axios
                .get(site + 'courses')
                .then(r => commit('SAVE_COURSES', r));
        },
        Register(state, value) {
            return new Promise((resolve) => {
                axios
                    .post(site + `users/createUser?username=${value.userName}&email=${value.email}&password=${value.pass}`)
                    .then(r => resolve(r.data));
            })
        },
        Login(state, value) {
            return new Promise((resolve) => {
                axios
                    .post(site + `user/signIn?username=${value.username}&password=${value.password}`)
                    .then(r => {
                        state.commit('SET_TOKEN', r.data.token)
                        createPersistedState('')
                        resolve(r.data);
                    });
            });

        },
        loadUniversity({commit}) {
            axios
                .get(site + 'universities')
                .then(r => commit('SAVE_UNIVERSITY', r));
        },
        enrollCourse({state}, value) {
            return new Promise((resolve) => {
                axios
                    .post(site + 'gradebook/enroll?' + "&courseId=" + value, {},
                        {headers: {'tokenId': state.token.tokenId, 'tokenSecret': state.token.tokenSecret}})
                    .then(r => resolve(r.data));
            });
        },
        loadEnrolledCourses({commit, state}){
            axios
                .get(site+'gradebook',
                    {headers: {'tokenId': state.token.tokenId, 'tokenSecret': state.token.tokenSecret}})
                .then(r=>commit('SET_ENROLLED_COURSES', r))
        }
    },
    mutations: {
        IS_DRAWER_ACTIVE(state, value) {
            state.isDrawerOpen = value;
        },
        IS_LOGIN_ACTIVE(state, value) {
            state.isLoginPopupOpen = value;
        },
        IS_PROGRESS_BAR_DYNAMIC_CHOICE(state, value){
            state.progressBarDynamicChoice = value;
        },
        SAVE_DOCUMENTATION(state, value) {
            state.documentationData = value;
        },
        SAVE_COURSES(state, value) {
            state.courseData = value;
        },
        SAVE_UNIVERSITY(state, value) {
            state.universityData = value;
        },
        SET_TOKEN(state, value) {
            state.token = value;
        },
        SET_ENROLLED_COURSES(state, value){
            state.enrolledCourses = value;
        }

    },
    getters: {
        getToken(state) {
            console.log("AAA")
            console.log(state.token)
            return state.token
        }
    },
});
