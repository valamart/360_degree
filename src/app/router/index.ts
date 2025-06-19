import { createRouter, createWebHistory } from 'vue-router'
import { EmployeePage } from '@/pages/employees/index'
import { EmployeeCard } from '@/pages/employeeCard/index.ts'

const routes = [
    {
        path: '/list',
        component: EmployeePage,
    },
    {
        path: '/:id',
        component: EmployeeCard,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
