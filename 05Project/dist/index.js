"use strict";
class User {
    /* By providing the empty string to city we avoid the error line and
    there is no need to intialize it in the constructor */
    constructor(email, name) {
        // this two parmeters show that the email and name are string
        this.city = "Jaipur";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    deleteToken() {
        console.log("token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const kartikey = new Usern("k@g.com", "Kartikey");
class SubUser extends Usern {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; //here as it is private we are not able to acess it
        //if we mark it protected it can be accessible in this class and the class that inherit it
    }
}
