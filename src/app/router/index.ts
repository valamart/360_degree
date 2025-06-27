import { createRouter, createWebHistory } from 'vue-router'
import { EmployeesPage } from '@/pages/employeesPage'
import { EmployeePage } from '@/pages/employeePage'

const routes = [
    {
        path: '/employee',
        component: EmployeesPage,
    },
    {
        path: '/employee/:id',
        component: EmployeePage,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
