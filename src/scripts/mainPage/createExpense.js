import {Expense} from './expenses.js'
export const createExpense = () =>{
    const expense = new Expense($("#transactionName").val(), $("#transactionAmount").val(), new Date, $("#transactionCategory").val(), "out")
    const endpoint = "http://localhost:3000/expenses"
    fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(expense)
    })
    .then(response => response.json())
}