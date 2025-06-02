import { departmentConfig } from '@/pages/employees/employeesPages/departmentFilterPage/config/departmentConfig.ts'

export const useDepartmentFilter = () => {
    const employees = departmentConfig
    const uniqueDepartments = [...new Set(employees.map((emp: any) => emp.department))]

    return { uniqueDepartments }
}
