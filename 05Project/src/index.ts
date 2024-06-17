class User {
    email: string
    name: string
    // this two parmeters show that the email and name are string
    city: string = ""
    /* By providing the empty string to city we avoid the error line and
    there is no need to intialize it in the constructor */ 
    constructor(email: string, name : string){
        this.email = email;
        this.name = name;
    }
}

const avani = new User("a@a.com", "avani");
// in constructor we don't have to write name: "avani"

avani.city = "jaipur"
// here we cannot add any other value than string