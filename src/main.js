import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import vuesax from 'vuesax'
import {store} from './store/store'
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css'

Vue.use(vuesax);
Vue.config.productionTip = false;
new Vue({
    router,
    vuetify,
    vuesax,
    store,
    render: h => h(App)
}).$mount('#app');
