
export class User{
    constructor(id){
        this.id = id;
    }
    async logInUser(){
        const path = `logUser/${this.id}`
        const response = await fetch(endpoint+path)
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
        const path = `expenses/`
        const response = await fetch(endpoint + path)
        const data = await response.json()
        return data;
    }
}