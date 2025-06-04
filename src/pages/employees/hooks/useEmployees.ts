import { ref, computed, onMounted } from 'vue'
import router from '@/app/router'
import { fetchData } from '@/api'

type Employee = {
    id: number
    name: string
    department: string
    // другие поля...
}

export const useEmployees = (initialSearchQuery = ref('')) => {
    const isLoading = ref(false)
    const error = ref<string | null>(null)
    const employeeList = ref<Employee[]>([])
    const selectedDepartment = ref<string>('All')
    const receivedData = ref<Employee[] | null>(null)
    const searchQuery = initialSearchQuery

    const loadedEmployeeData = async () => {
        isLoading.value = true
        error.value = null
        let data
        try {
            data = await fetchData()
            employeeList.value = data.employeeList || []
        } catch (err) {
            error.value = 'Failed to fetch employees'
            console.error(err)
        } finally {
            isLoading.value = false
        }
    }

    const goTo = (id) => {
        router.push({ path: `/${id}` })
    }

    const filteredByDepartment = computed(() => {
        const list = receivedData.value ?? employeeList.value
        if (!list.length) return []

        const department = selectedDepartment.value
        return department === 'All' ? list : list.filter((emp) => emp.department === department)
    })

    const searchEmployees = computed(() => {
        const list = filteredByDepartment.value
        const query = searchQuery.value.toLowerCase()

        return query ? list.filter((employee) => employee.name.toLowerCase().includes(query)) : list
    })

    const finalList = computed(() => searchEmployees.value)

    onMounted(loadedEmployeeData)

    return {
        isLoading,
        error,
        finalList,
        employeeList,
        selectedDepartment,
        receivedData,
        loadedEmployeeData,
        goTo,
        filteredByDepartment,
        searchQuery,
    }
}
