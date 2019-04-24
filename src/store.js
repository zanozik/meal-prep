import Vue from 'vue';
import Vuex from 'vuex';
//import firebase from 'firebase/app';
//import 'firebase/auth';
//import router from '@/router';
//import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
        isAuthenticated: false,
        recipes: [],
        userRecipes: [],
        snackbar: {
            visible: false,
            text: null,
            timeout: 6000,
            multiline: false,
            color: 'default'
        },
        errors: {}
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setUserRecipes(state, payload) {
            state.userRecipes = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    }
});

export default store;
