import { loggedUser } from "./getData.js";

export const updateFunds = () =>{
    $("#funds").text(loggedUser.funds);
    $("#totalOut").text(loggedUser.monthlyExpenses);
    $("#totalIn").text(loggedUser.monthlyEntries);
}