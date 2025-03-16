export const tableHTML = (expense) =>{
    if(expense.flow === "in"){
        return `<tr>
                    <td>${expense.date}</td>
                    <td class="text-success">${expense.name}</td>
                    <td><span class="badge bg-success">${expense.type}</span></td>
                    <td class="text-center text-success fw-bold">R$ ${expense.value}</td>
                </tr>`
    } else{
        return `<tr>
                    <td>${expense.date}</td>
                    <td class="text-danger">${expense.name}</td>
                    <td><span class="badge bg-danger">${expense.type}</span></td>
                    <td class="text-center text-danger fw-bold">-R$ ${expense.value}</td>
                </tr>`
    }
}