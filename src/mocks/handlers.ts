import { http } from 'msw'
import { employeeList } from './employeeMocks'

export const handlers = [
    http.get('src/mocks/employeeMocks', () => {
        const responseData = {
            employeeList,
        }

        return new Response(JSON.stringify(responseData), {
            headers: { 'Content-Type': 'application/json' },
        })
    }),
    http.get('src/mocks/employeeMocks/:id', ({ params }) => {
        const { id } = params
        const employee = employeeList.find((emp) => emp.id === Number(id))

        if (!employee) {
            return new Response(JSON.stringify({ error: 'Employee not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            })
        }

        return new Response(JSON.stringify(employee), {
            headers: { 'Content-Type': 'application/json' },
        })
    }),
]
