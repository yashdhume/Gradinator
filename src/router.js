import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '',
            component: () => import('./main_layout/MainPage.vue'),
            children: [
                {
                    path: '/',
                    redirect: '/dashboard'
                },
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    index: 1,
                    component: () => import('./views/Dashboard')
                }
            ],
        },
        {
            path: '*',
            redirect: '/dashboard'
        }
    ],
})
