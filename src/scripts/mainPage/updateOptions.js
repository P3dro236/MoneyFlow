import {fundsType, expensesType, funds} from './getData.js'

export const updateOptions = () =>{
    fundsType.forEach((item)=>{
        $("#fundsCategory").append(`<option value="${item}">${item}</option>`)
    })
    expensesType.forEach((item)=>{
        $("#transactionCategory").append(`<option value="${item}">${item}</option>`)
    })
}