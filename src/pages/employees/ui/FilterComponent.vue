<script setup>
    import { defineProps, defineEmits } from 'vue'

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

    const handleSearchInput = (event) => {
        emit('update:searchValue', event.target.value)
    }

    const handleDepartmentChange = (event) => {
        console.log(event.target.value)
        emit('update:departmentValue', event.target.value)
    }
</script>

<template>
    <div class="employee-filters">
        <!-- Search input -->
        <div class="filter-group">
            <input
                type="text"
                :value="searchValue"
                @input="handleSearchInput"
                placeholder="Search employees by name..."
                class="search-input"
            />
        </div>

        <!-- Department select -->
        <div class="filter-group">
            <select
                :value="departmentValue"
                @change="handleDepartmentChange"
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
