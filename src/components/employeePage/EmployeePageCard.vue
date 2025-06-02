<template>
    <div class="card">
        <h3>{{ employee.name }}</h3>
        <img
            :src="employee.photo"
            :alt="employee.name"
        />

        <p>{{ employee.position }}</p>
        <p>{{ employee.department }}</p>
        <RatingModal :employee="employee" />
    </div>
</template>

<script setup>
    import { useEmployeeData } from '@/app/stores/employeeStore.ts'
    import RatingModal from '../RatingModal.vue'

    const { id } = defineProps(['id'])
    const data = useEmployeeData()
    const employee = data.data.find((employee) => employee.id === +id)
    console.log(employee, id)
</script>

<style></style>
