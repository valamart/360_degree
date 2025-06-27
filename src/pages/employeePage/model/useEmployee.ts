import { fetchDataId } from '@/api'
import { ref, computed } from 'vue'

type Employee = {
    id: number
    name: string
    department: string
    position: string
    photo: string
    // другие поля...
}

export const useEmployee = () => {
    const employee = ref<Employee | null>(null)
    const isLoading = ref(true) // Начинаем с true
    const error = ref<string | null>(null)

    const loadEmployeeData = async (id: number) => {
        try {
            const data = await fetchDataId(id)
            employee.value = data
            console.log(data.photo)
        } catch (err) {
            error.value = 'Failed to fetch employees'
            console.error(err)
        } finally {
            isLoading.value = false
        }
    }

    return {
        loadEmployeeData,
        isLoading,
        error,
        employee,
    }
}
