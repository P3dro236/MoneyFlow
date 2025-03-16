import {expenses} from './getData.js';
import {tableHTML} from './tableHTML.js';

export const updateTable = ()=>{
    expenses.forEach((item)=>{
        $("#expensesTable").append(tableHTML(item))
    })
}
