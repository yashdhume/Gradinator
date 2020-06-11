import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        isDrawerOpen: false,
    },
    mutations: {
        IsDrawerActive(state, value) {
            state.isDrawerOpen = value;
        },
    },
    getters: {},
});
