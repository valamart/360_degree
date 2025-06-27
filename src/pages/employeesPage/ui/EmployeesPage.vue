<template>
    <div>
        <h2>employerlist</h2>

        <FilterComponent
            v-model:searchValue="searchQuery"
            v-model:departmentValue="selectedDepartment"
        />
        <div>
            <Card
                v-for="item of filteredEmployees"
                :key="item.id"
                :employee="item"
                ><RouterLink :to="`/employee/${item.id}`"
                    >перейти к анкете {{ item.name }}</RouterLink
                ></Card
            >
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref, watch, computed } from 'vue'
    import { useEmployees } from '../model/useEmployees'
    import Card from '@/pages/employeesPage/ui/Card.vue'
    import list from '@/pages/employeesPage/ui/list.vue'
    import FilterComponent from '@/pages/employeesPage/ui/FilterComponent.vue'
    const searchQuery = ref('')

    const {
        isLoading,
        error,
        filteredEmployees,
        selectedDepartment,
        loadedEmployeeData,
        searchTerm,
    } = useEmployees()

    onMounted(loadedEmployeeData)
</script>

<style>
    .list {
        display: flex;
        flex-wrap: wrap;
    }
</style>
