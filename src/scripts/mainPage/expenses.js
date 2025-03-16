export class Expense{
    constructor(name, value, date, type, flow){
        this.name = name;
        this.value = value;
        this.date = date;
        this.type = type;
        this.flow = "out"
    }
}
export class Funds{
    constructor(value, date, flow){
        this.value = value;
        this.date = date;
        this.flow = "in"
    }
}