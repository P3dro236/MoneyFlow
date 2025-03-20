import { loggedUser } from "./getData.js";
export const updateUser = () =>{
    $("#username").text(loggedUser.username);
}