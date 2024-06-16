/* INTERFACES : its more like a class but more loose form of it
EXAMPLE: let you are creating a new user with some of the properties like email, usrid and you 
start a trial for user and whatever services you are selling and also you want to give some
discount code as well. 

We can also define functions in it and there are various forms of doing it*/

interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string
    getCoupon(coupname: string): number
}

const avani: User = {dbId: 11 ,email:"avani@xy.com", userId: 1103,
    startTrial: () => {
        return "Trial Started"
    },
    getCoupon: (name: "avani10") => {
        return 10
    }
}

avani.email = "a@a.com"

export {}

// here the function parameter name not neccessarily have to match with function argument name.
