import { createRouter, createWebHistory } from "vue-router";

import EmployeesView from '../views/EmployeesView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'employees',
            component: EmployeesView
        },
        {
            path: '/pastempl',
            name: 'pastempl',
            component: () => import('../views/PastEmplView.vue')
        },
        {
            path: '/positions',
            name: 'positions',
            component: () => import('../views/PositionsView.vue')
        },
        {
            path: '/employeeInfo/:id',
            name: 'employeeInfo',
            component: () => import('../views/AddEditEmployee.vue')
        }
    ]
});

export default router;