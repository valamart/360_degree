<script setup>
    import { defineProps, defineEmits, computed } from 'vue'

    const departments = [
        { department: 'IT' },
        { department: 'Design' },
        { department: 'Management' },
        { department: 'Testing' },
    ]

    const props = defineProps({
        searchValue: {
            type: String,
            default: '',
        },
        departmentValue: {
            type: String,
            default: 'All',
        },
    })

    const emit = defineEmits(['update:searchValue', 'update:departmentValue'])

    const searchModel = computed({
        get: () => props.searchValue,
        set: (value) => emit('update:searchValue', value),
    })

    const departmentModel = computed({
        get: () => props.departmentValue,
        set: (value) => emit('update:departmentValue', value),
    })
</script>

<template>
    <div class="employee-filters">
        <!-- Search input -->
        <div class="filter-group">
            <input
                type="text"
                v-model="searchModel"
                placeholder="Search employees by name..."
                class="search-input"
            />
        </div>

        <!-- Department select -->
        <div class="filter-group">
            <select
                v-model="departmentModel"
                class="department-select"
            >
                <option value="All">Все отделы</option>
                <option
                    v-for="department of departments"
                    :value="department.department"
                    :key="department.department"
                >
                    {{ department.department }}
                </option>
            </select>
        </div>
    </div>
</template>
