<template>
    <div class="employee-search">
        <input
            type="text"
            :value="modelValue"
            @input="handleInput"
            v-bind="$attrs"
            placeholder="Search employees by name..."
        />
    </div>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue'

    const props = defineProps({
        modelValue: {
            type: String,
            default: '',
        },
    })

    const emit = defineEmits(['update:modelValue'])

    const handleInput = (event) => {
        emit('update:modelValue', event.target.value)
    }
</script>
