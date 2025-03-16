import {updateTable} from './updateTable.js';
import {updateFunds} from './updateFunds.js';
import {updateUser} from './updateUser.js';
import {updateOptions} from './updateOptions.js';

export const initialUpdate = () =>{
    updateTable();  
    updateFunds();
    updateUser();
    updateOptions();
}