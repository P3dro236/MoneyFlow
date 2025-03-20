import { tableHTML } from './tableHTML.js';
import { expenses } from './getData.js';

export const updateTable = async () =>{
    expenses.forEach((item) =>{
        $("#expensesTable").append(tableHTML(item))
    })
}