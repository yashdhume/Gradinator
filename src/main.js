import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import vuesax from 'vuesax'
import {store} from './store/store'
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css';
import VueSplit from 'vue-split-panel';
import FormWizard from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import VModal from 'vue-js-modal'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import axios from 'axios';
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
Vue.use(VModal)
Vue.use(FormWizard)
Vue.use(VueSplit);
Vue.use(vuesax);
Vue.use(ElementUI, {locale});
Vue.config.productionTip = false;
new Vue({
    router,
    vuetify,
    vuesax,
    store,
    mounted(){
        axios.interceptors.response.use(
            async response=>{
                if(this.$store.state.loginData.stayLoggedIn===true&&response.data.error==='The token has expired') {
                    this.$store.dispatch('Login', this.$store.state.loginData).then(()=>{return response;})
                }
                else return response;
            },
        )
    },
    render: h => h(App)
}).$mount('#app');
