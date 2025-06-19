<template>
    <Card
        v-for="item of filteredEmployees"
        :key="item.id"
        :employee="item"
        @click="goTo(item.id)"
    />
</template>

<script setup>
    import Card from '@/pages/employees/ui/Card.vue'
    const { filteredEmployees } = defineProps(['filteredEmployees'])
</script>
