import { ref, computed, onMounted } from 'vue'
import router from '@/app/router'
import { fetchData } from '@/api'

export const useEmployees = () => {
    const isLoading = ref(false)
    const error = ref<string | null>(null)
    const employeeList = ref([])
    const selectedDepartment = ref('All')
    const receivedData = ref(null)

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

    const finalList = computed(() => {
        if (!employeeList.value.length) return []
        if (receivedData.value?.length) {
            return receivedData.value
        }
        return filteredEmployees(employeeList.value, selectedDepartment.value)
    })

    const filteredEmployees = (list: Array<{ department: string }>, department: string) => {
        if (!list.length) return []
        if (department === 'All') return list
        return list.filter((emp) => emp.department === department)
    }

    const updateResults = (data: any) => {
        console.log(receivedData.value, data)
        receivedData.value = data
    }

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
        updateResults,
        filteredEmployees,
    }
}
