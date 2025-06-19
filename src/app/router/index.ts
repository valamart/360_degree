import { createRouter, createWebHistory } from 'vue-router'
import { EmployeePage } from '@/pages/employees'
import { EmployeeCard } from '@/pages/employeeCard'

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
