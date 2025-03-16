import {user} from './getData.js'

export const updateUser = () =>{
    $("#username").append(user.username);
    // $("#name").append(user.name);
    // $("#email").append(user.email);
}