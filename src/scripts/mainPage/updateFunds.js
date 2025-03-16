import {funds, totalIn, totalOut} from './getData.js'

export const updateFunds = () =>{
    $("#funds").append(funds);
    $("#totalIn").append(totalIn);
    $("#totalOut").append(totalOut);
}