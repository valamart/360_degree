<template>
    <div class="card">
        <h3>{{ employee.name }}</h3>
        <img
            :src="employee.photo"
            :alt="employee.name"
        />

        <p>{{ employee.position }}</p>
        <p>{{ employee.department }}</p>
    </div>
</template>

<script setup>
    const { employee } = defineProps(['employee'])
</script>

<style scoped>
    .card {
        border: 1px solid #000;
        width: 200px;
        padding: 12px;
        border-radius: 8px;
        margin: 10px;
        box-sizing: border-box;
    }
    .card img {
        width: 100px;
        height: 120px;
    }
</style>
