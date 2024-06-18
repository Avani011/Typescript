class User {
    public email: string
    private name: string
    // this two parmeters show that the email and name are string
    readonly city: string = "Jaipur"
    /* By providing the empty string to city we avoid the error line and
    there is no need to intialize it in the constructor */ 
    constructor(email: string, name : string){
        this.email = email;
        this.name = name;
    }
}

const avani = new User("a@a.com", "avani");
// in constructor we don't have to write name: "avani"

// avani.city = "jaipur"
// here we cannot add any other value than string

//avani.name this will give error line as it is in private mode
//# is used in javascript and here in typescript we have private keyword public

// in projects we can also wite class in this way:
//GETTER AND SETTER:
class Usern {
    protected _courseCount = 1

    readonly city: string = "Jaipur"
    constructor(
        public email: string,
        public name: string
    ){ }

    private deleteToken(){
        console.log("token Deleted")
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1")
        }
        this._courseCount = courseNum
    }
    //for setter we can't have any return type as it is used to set some value 
    // we are just simply using get keyword to make function getter and set keyword for function setter

}

const kartikey = new Usern("k@g.com", "Kartikey");


class SubUser extends Usern{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4 //here as it is private we are not able to acess it
        //if we mark it protected it can be accessible in this class and the class that inherit it
    }
}
