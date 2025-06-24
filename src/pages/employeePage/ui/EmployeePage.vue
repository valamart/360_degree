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
    import RatingModal from '@/components/RatingModal.vue'
    import { useRoute } from 'vue-router'
    import { onMounted } from 'vue'

    const route = useRoute()
    const employee = JSON.parse(route.query.employee)
</script>

<style></style>
