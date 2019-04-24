import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth, DB } from './firebase';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.prototype.$auth = auth;
Vue.prototype.$DB = DB;
Vue.prototype.$apiUrl = 'https://api.edamam.com/search';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
