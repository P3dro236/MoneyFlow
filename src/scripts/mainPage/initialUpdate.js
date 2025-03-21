import { updateUser } from './updateUser.js';
import { updateFunds } from './updateFunds.js';
import { updateTable } from './createTable.js';


export const initialUpdate = async () =>{
    updateUser();
    updateFunds();
    updateTable();
    $("body").removeClass("loading")
}