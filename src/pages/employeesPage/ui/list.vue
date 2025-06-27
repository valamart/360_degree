<template>
    <Card
        v-for="item of filteredEmployees"
        :key="item.id"
        :employee="item"
        @click="$emit('goTo', item.id)"
    />
</template>

<script setup>
    import Card from '@/pages/employeesPage/ui/Card.vue'
    const { filteredEmployees } = defineProps(['filteredEmployees'])
</script>
