import { ref, computed, onMounted } from 'vue'
import router from '@/app/router'
import { fetchData } from '@/api'

type Employee = {
    id: number
    name: string
    department: string
    // другие поля...
}

export const useEmployees = () => {
    const isLoading = ref(false)
    const error = ref<string | null>(null)
    const employeeList = ref<Employee[]>([])
    const selectedDepartment = ref<string>('All')
    const receivedData = ref<Employee[] | null>(null)
    const searchTerm = ref('')

    const loadedEmployeeData = async () => {
        isLoading.value = true
        error.value = null
        try {
            const data = await fetchData()
            employeeList.value = data.employeeList || []
        } catch (err) {
            error.value = 'Failed to fetch employees'
            console.error(err)
        } finally {
            isLoading.value = false
        }
    }

    const goTo = (id: number) => {
        const employee = employeeList.value.find((e) => e.id === +id)
        if (employee) {
            router.push({
                path: `/${id}`,
                query: { employee: JSON.stringify(employee) },
            })
        }
    }

    const filteredEmployees = computed(() => {
        const list = receivedData.value ?? employeeList.value
        if (!list.length) return []

        const query = searchTerm.value.toLowerCase()
        const department = selectedDepartment.value

        return list.filter((employee) => {
            const departmentMatch = department === 'All' || employee.department === department
            const nameMatch = !query || employee.name.toLowerCase().includes(query)
            return departmentMatch && nameMatch
        })
    })

    return {
        isLoading,
        error,
        filteredEmployees,
        selectedDepartment,
        receivedData,
        loadedEmployeeData,
        goTo,
        searchTerm,
    }
}
