import { testUser, testExpense} from './users.js';

const getData = async () =>{
    const response = await testUser.logInUser();
    return response;
}
const getExpenses = async () =>{
    const response = await testExpense.getExpenses();
    return response;
}

export const loggedUser = await getData()
export const expenses = await getExpenses()