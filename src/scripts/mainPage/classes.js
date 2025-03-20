export class User{
    constructor(id){
        this.id = id;
    }
    async logInUser(){
        const endpoint = `https://67dbbf2f1fd9e43fe475b2ec.mockapi.io/api/v1/logUser/${this.id}`;
        const response = await fetch(endpoint)
        const data = await response.json()

        this.name = data.name;
        this.username = data.username;
        this.funds = data.funds;
        this.phone = data.phone;
        this.monthlyExpenses = data.monthlyExpenses;
        this.monthlyEntries = data.monthlyEntries;

        return this;
    }
}
export class Expenses{
    constructor(userId){
        this.userId = userId;
    }
    async getExpenses(){
        const endpoint = `https://67dbbf2f1fd9e43fe475b2ec.mockapi.io/api/v1/expenses/`;
        const response = await fetch(endpoint)
        const data = await response.json()
        return data;
    }
}