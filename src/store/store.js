import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex, axios)
export const store = new Vuex.Store({
    state: {
        isDrawerOpen: false,
        documentationData: {},
    },
    actions:{
        loadDocumentation({commit}){
            axios
                .get('https://gradinator.herokuapp.com/docs')
                .then(r=>{
                    console.log(r)
                    commit('SAVE_DOCUMENTATION', r)
                });
        }
    },
    mutations: {
        IS_DRAWER_ACTIVE(state, value) {
            state.isDrawerOpen = value;
        },
        SAVE_DOCUMENTATION(state, value){
            state.documentationData = value;
        }
    },
    getters: {},
});
