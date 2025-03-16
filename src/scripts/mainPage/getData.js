// export const getExpenses = async() =>{
//     const response = await fetch('http://localhost:3000/expenses')
//     const expenses = await response.json()
//     return expenses
// }
// export const getFunds = async () =>{
//     const response = await fetch('http://localhost:3000/funds')
//     const funds = await response.json()
//     return funds
// }
// export const getAllValueIn = async() =>{
//     await getExpenses().then((expenses) =>{
//         let totalIn = 0
//         expenses.forEach(expense => {
//             if(expense.flow === "in"){
//                 totalIn += expense.value
//             }
//         });
//         return totalIn
//     }
// )}
// export const getAllValueOut = async() =>{
//     await getExpenses().then((expenses) =>{
//         let totalOut = 0
//         expenses.forEach(expense => {
//             if(expense.flow === "out"){
//                 totalOut += expense.value
//             }
//         });
//         return totalOut
//     }
// )}
// export const getUserInfo = async () =>{
//     const response = await fetch('http://localhost:3000/user')
//     const user = await response.json()
//     return user
// }



export const expenses = [
    {name: "Entrada", value: 1212, date:"2021-07-01", type:"PIX", flow:"in"},
    {name: "Almoço", value: 20, date:"2021-07-01", type:"Alimentação", flow:"out"},
    {name: "Entrada", value: 12, date:"2021-07-01", type:"Dinheiro", flow:"in"},
    {name: "Entrada", value: 12, date:"2021-07-01", type:"PIX", flow:"in"},
    {name: "Almoço", value: 20, date:"2021-07-01", type:"Alimentação", flow:"out"},
]
export const fundsType = ["PIX", "Dinheiro"]
export const expensesType = ["Alimentação", "Transporte", "Lazer", "Outros"]


export const funds = "1240,12"
export const totalIn = "1221,52"
export const totalOut = "18,60"
export const user = {name: "Pedro Henrique Gonçalves", email:"pedrohq238@gmail.com", username:"pedrohq238"}