import { createRouter, createWebHistory } from 'vue-router'
import { EmployeePage } from '@/pages/employees/index'
import EmployeePageCard from '@/components/employeePage/EmployeePageCard.vue'

const routes = [
    {
        path: '/list',
        component: EmployeePage,
    },
    {
        path: '/:id',
        component: EmployeePageCard,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
