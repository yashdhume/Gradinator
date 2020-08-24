import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import Vuesax from 'vuesax'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import {EventBus} from "./eventBus";

const ls = new SecureLS({isCompression: false});

Vue.use(Vuex, axios, Vuesax)
export const site = "https://gradinator.herokuapp.com/";
export const store = new Vuex.Store({
    plugins: [
        createPersistedState({
            paths: ['token', 'progressBarDynamicChoice', 'loginData'],
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
        loginData: {},
        universityData: {},
        token: {},//tokenId, tokenSecret
        enrolledCourses: {},
    },
    actions: {
        Register(state, value) {
            return new Promise((resolve) => {
                axios
                    .post(site + `users/createUser?username=${value.userName}&email=${value.email}&password=${value.pass}`)
                    .then(r => resolve(r.data));
            })
        },
        Login({commit}, value) {
            return new Promise((resolve) => {
                axios
                    .post(site + `user/signIn?username=${value.username}&password=${value.password}`)
                    .then(r => {
                        commit('SET_TOKEN', r.data.token);
                        if(value.stayLoggedIn) commit('SET_LOGIN_DATA', value);
                        resolve(r.data);
                    });
            });

        },
        loadUniversity({commit}) {
            axios
                .get(site + 'universities')
                .then(r => commit('SAVE_UNIVERSITY', r));
        },
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
        SAVE_UNIVERSITY(state, value) {
            state.universityData = value;
        },
        SET_TOKEN(state, value) {
            state.token = value;
            EventBus.$emit("userChange");
        },
        SET_ENROLLED_COURSES(state, value){
            state.enrolledCourses = value;
        },
        SET_LOGIN_DATA(state, value){
            state.loginData = value;
        }
    },
    getters: {
        getToken(state) {
            return state.token
        }
    },
});
