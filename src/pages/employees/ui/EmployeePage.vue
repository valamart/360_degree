<template>
    <div>
        <h2>employerlist</h2>

        <FilterComponent
            v-model:searchValue="searchQuery"
            v-model:departmentValue="selectedDepartment"
        />
        <list :filteredEmployees="filteredEmployees" />
    </div>
</template>

<script setup>
    import { onMounted, ref, watch, computed } from 'vue'
    import { useEmployees } from '../model/useEmployees'

    import list from '@/pages/employees/ui/list.vue'
    import FilterComponent from '@/pages/employees/ui/FilterComponent.vue'
    const searchQuery = ref('')

    const { isLoading, error, filteredEmployees, selectedDepartment, goTo } =
        useEmployees(searchQuery)
</script>

<style>
    .list {
        display: flex;
        flex-wrap: wrap;
    }
</style>
