import { User } from './user.js';
export const logUser = async (email, password) =>{
    const user = new User(email, password)
    const endpoint = "http://localhost:3000/login"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    // try {
    //     await fetch(endpoint, options)
    // } 
    // catch(e){
    //     console.error(e)
    // }
    console.log(user)
}