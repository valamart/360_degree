import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEmployeeData = defineStore('employeeData', () => {
    const data = ref([
        {
            id: 1,
            photo: 'src/assets/img/Wojak.png',
            name: 'Иван Петров',
            position: 'Frontend Developer',
            department: 'IT',
        },
        {
            id: 2,
            photo: 'src/assets/img/Soyjak.jpg',
            name: 'Алексей Смирнов',
            position: 'Backend Developer',
            department: 'IT',
        },
        {
            id: 3,
            photo: 'src/assets/img/Без названия.jpeg',
            name: 'Мария Иванова',
            position: 'UI/UX Designer',
            department: 'Design',
        },
        {
            id: 4,
            photo: 'src/assets/img/images.jpeg',
            name: 'Дмитрий Кузнецов',
            position: 'Project Manager',
            department: 'Management',
        },
        {
            id: 5,
            photo: 'src/assets/img/ab67706c0000da84179d92d31d61654aa8682d9b.jpeg',
            name: 'Елена Соколова',
            position: 'QA Engineer',
            department: 'Testing',
        },
    ])
    return { data }
})
