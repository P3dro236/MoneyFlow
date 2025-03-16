import { toggleForm } from "./switchForm.js";
import { createUser } from "./createUser.js";
import { logUser } from "./logUser.js";
import { togglePassword } from "./togglePassword.js";
$(document).ready(function(){
    // Toggle the logIn and logUp forms
    $("#toLogUp").on("click", () => {
        toggleForm("#logIn", "#logUp");
    });
    $("#toLogIn").on("click", () => {
        toggleForm("#logUp", "#logIn");
    });



    // Fetch to create or get user
    $("#createAccount").on("click", ()=>{
        createUser($("#CreateName").val(), $("#CreateEmail").val(), $("#CreateUsername").val(), $("#CreatePassword").val())
    })
    $("#logInUser").on("click", ()=>{
        logUser($("#LogInEmail").val(), $("#LogInPassword").val())
    })

    // Toggle password visibility
    $("#toggleCreatePassword").on("click", ()=>{
        togglePassword($("#CreatePassword")[0])
    })
    $("#togglePassword").on("click", ()=>{
        togglePassword($("#LogInPassword")[0])
    })
})