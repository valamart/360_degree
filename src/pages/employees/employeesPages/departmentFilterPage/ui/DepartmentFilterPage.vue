<script setup>
    import { useDepartmentFilter } from '../model/departmentFilter'

    const { uniqueDepartments } = useDepartmentFilter()

    const props = defineProps({
        modelValue: {
            type: String,
            default: 'All',
        },
    })

    const emit = defineEmits(['update:modelValue'])

    const handleChange = (event) => {
        emit('update:modelValue', event.target.value)
    }
</script>

<template>
    <select
        :value="modelValue"
        @change="handleChange"
    >
        <option value="All">Все отделы</option>
        <option
            v-for="item of uniqueDepartments"
            :value="item"
            :key="item"
        >
            {{ item }}
        </option>
    </select>
</template>
