<template>
    <div class="employee-search">
        <input
            v-model="searchQuery"
            type="text"
            placeholder="Search employees by name..."
            @input="emitResults"
        />
    </div>
</template>

<script setup>
    import { ref, watch, computed } from 'vue'

    const props = defineProps({
        employees: {
            type: Array,
            required: true,
            default: () => [],
        },
    })

    const emit = defineEmits(['filtered-results'])

    const searchQuery = ref('')

    const filteredEmployees = computed(() => {
        if (!searchQuery.value) return props.employees
        const query = searchQuery.value.toLowerCase()

        return props.employees.filter((employee) => employee.name.toLowerCase().includes(query))
    })

    const emitResults = () => {
        emit('filtered-results', filteredEmployees.value)
    }

    watch(
        () => props.employees,
        () => {
            emitResults()
        }
    )

    emitResults()
</script>
