import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '',
            component: () => import('./main_layout/MainPage.vue'),
            children: [
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    index: 1,
                    component: () => import('./views/Dashboard')
                },
                {
                    path: '/docs',
                    name: 'Documentation',
                    index: 2,
                    component: () => import('./views/Documentation')
                },
            ],
        },
        {
            path: '*',
            redirect: '/dashboard'
        }
    ],
})
