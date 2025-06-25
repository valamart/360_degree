<template>
    <div class="card">
        <div v-if="isLoading">Loading employee data...</div>
        <div
            v-else-if="error"
            class="error"
        >
            {{ error }}
        </div>
        <div v-else-if="employee">
            <h3>ID: {{ route.params.id }}</h3>
            <h3>Name: {{ employee.name }}</h3>
            <img
                :src="employee.photo"
                :alt="employee.name"
                class="employee-photo"
            />
            <p v-if="employee.photo">Image URL: {{ employee.photo }}</p>
            <p>Department: {{ employee.department }}</p>
            <RatingModal
                v-if="employee"
                :employee="employee"
            />
        </div>
        <div v-else>Employee not found</div>
    </div>
</template>

<script setup lang="ts">
    import RatingModal from '@/components/RatingModal.vue'
    import { useRoute } from 'vue-router'
    import { onMounted } from 'vue'
    import { useEmployee } from '../model/useEmployee'

    const route = useRoute()

    const { isLoading, error, employee, loadEmployeeData } = useEmployee()

    onMounted(async () => {
        const employeeId = Number(route.params.id)
        if (!isNaN(employeeId)) {
            await loadEmployeeData(employeeId)
        }
    })
</script>

<style></style>
