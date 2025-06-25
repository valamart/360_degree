export const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    try {
        const response = await fetch('src/mocks/employeeMocks')
        if (!response.ok) {
            throw new Error('failed to fetch users')
        }
        const data = await response.json()
        return data
    } catch (err) {
        console.error('API Error:', err)
    }
}

export const fetchDataId = async (id: number) => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    try {
        const response = await fetch(`src/mocks/employeeMocks/${id}`)
        if (!response.ok) {
            throw new Error('failed to fetch users')
        }
        const data = await response.json()
        return data
    } catch (err) {
        console.error('API Error:', err)
    }
}
