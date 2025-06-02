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
]
