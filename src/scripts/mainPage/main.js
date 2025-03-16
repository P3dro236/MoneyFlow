import {initialUpdate} from './initialUpdate.js';
import {createExpense} from './createExpense.js';
import {hideValues} from './hideValues.js';
$(document).ready(function(){
    initialUpdate();
    $("#hide, #show").on("click", () =>{
        hideValues();
    })






    $("#saveTransaction").on("click", () =>{
        createExpense();
    })
})