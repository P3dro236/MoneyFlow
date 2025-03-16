export class NewUser {
    constructor(name, email, username, password) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}
export class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}