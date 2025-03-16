import { NewUser } from './user.js';
export const createUser = async (name, email, username, password) => {
    const user = new NewUser(name, email, username, password)
    const endpoint = "http://192.168.1.12:2458/v1/users/new"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    try {
        const response = await fetch(endpoint, options)
        if (!response.ok) {
            const errorData = await response.text()
            console.error(`Server error: ${response.status}`, errorData)
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const result = await response.json()
        console.log('Success:', result)
        return result
    } 
    catch(e){
        console.error(e)
        throw e
    }
}