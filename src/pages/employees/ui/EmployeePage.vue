<template>
    <div>
        <h2>employerlist</h2>
        <DepartmentFilterPage v-model="selectedDepartment" />
        <EmployeeSearchPage v-model="searchQuery" />
        <EmployeeListPage class="list">
            <EmployeeCardPage
                v-for="item of finalList"
                :key="item.id"
                :employee="item"
                @click="goTo(item.id)"
            />
        </EmployeeListPage>
    </div>
</template>

<script setup>
    import { onMounted, ref, watch, computed } from 'vue'
    import { useEmployees } from '../hooks/useEmployees'
    import { DepartmentFilterPage } from '@/pages/employees/employeesPages/departmentFilterPage'
    // import EmployeeCard from '@/components/EmployeeCard.vue'
    import { EmployeeListPage } from '@/pages/employees/employeesPages/employeeListPage/index'
    import { EmployeeSearchPage } from '../employeesPages/EmployeeSearchPage'
    import { EmployeeCardPage } from '@/pages/employees/employeesPages/employeeCardPage/index.ts'

    const searchQuery = ref('')

    const { isLoading, error, finalList, selectedDepartment, goTo } = useEmployees(searchQuery)
</script>

<style>
    .list {
        display: flex;
        flex-wrap: wrap;
    }
</style>
