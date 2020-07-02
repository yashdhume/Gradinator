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
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        })
    ],
    state: {
        isDrawerOpen: false,
        documentationData: {},
        courseData: {},
        loginData: {},
        universityData: {},
        token: {},//tokenId, tokenSecret
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
        }
    },
    mutations: {
        IS_DRAWER_ACTIVE(state, value) {
            state.isDrawerOpen = value;
        },
        IS_LOGIN_ACTIVE(state, value) {
            state.isLoginPopupOpen = value;
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
