<script setup lang="ts">
    import { ref } from 'vue'

    const props = defineProps(['employee'])
    const emit = defineEmits(['close'])
    const labels = ['Очень плохо', 'Плохо', 'Нормально', 'Хорошо', 'Отлично']

    const questions = [
        { id: 1, text: 'Качество работы?' },
        { id: 2, text: 'Коммуникация?' },
    ]
    const ratings = ref({})
    const updateSlider = (e) => {
        console.log('update')

        console.log('Selected value:', e.target.value)
    }
    const submitRatings = () => {
        console.log('Имя', props.employee.name, 'Оценки:', ratings.value)
        emit('close')
    }
</script>

<template>
    <div class="modal">
        <h2>Оценка: {{ employee.name }}</h2>
        <form @submit.prevent="submitRatings">
            <input
                type="hidden"
                :value="employee.name"
            />
            <div
                v-for="question in questions"
                :key="question.id"
            >
                <div class="rating-slider">
                    <label>{{ question.text }}</label>
                    <div class="slider-container">
                        <input
                            type="range"
                            v-model="ratings[question.id]"
                            min="1"
                            max="5"
                            step="1"
                            class="slider"
                            @input="updateSlider"
                        />
                        <div class="slider-labels">
                            <span
                                v-for="(label, index) in labels"
                                :key="index"
                                :class="{ active: ratings[question.id] >= index + 1 }"
                                @click="ratings[question.id] = 5 - index"
                            >
                                {{ label }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit">Отправить</button>
        </form>
    </div>
</template>
<style scoped>
    .slider-container {
        max-width: 400px;
        margin-top: 10px;
    }

    .slider {
        width: 100%;
        height: 10px;
        -webkit-appearance: none;
        appearance: none;
        background: #e0e0e0;
        outline: none;
        border-radius: 5px;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #4caf50;
        cursor: pointer;
    }

    .slider-labels {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

    .slider-labels span {
        cursor: pointer;
        padding: 5px;
        color: #666;
        transition: all 0.3s;
    }

    .slider-labels span.active {
        color: #4caf50;
        font-weight: bold;
    }
    .slider-labels span.active:first-child {
        color: red;
    }
    .slider-labels span.active:nth-child(2) {
        color: orangered;
    }
    .slider-labels span.active:nth-child(3) {
        color: yellow;
    }
    .slider-labels span.active:nth-child(4) {
        color: yellowgreen;
    }
    .slider-labels span.active:nth-child(4) {
        color: green;
    }
    .slider-labels span {
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
</style>
