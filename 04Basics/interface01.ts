// The unique feature in interface is that it has funtions or we can say methods we have extra in interface
// Suppose we have interface define which is a predefined library or any package
//now we want to add any property to it, How we are doing this:

//PREDEFINED INTERFACE:
interface User1 {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string
    getCoupon(coupname: string): number
}

// With some edit by us

interface User1{
    githubToken : string
}

const avani1: User1 = {dbId: 11 ,email:"avani@xy.com", userId: 1103,
    startTrial: () => {
        return "Trial Started"
    },
    getCoupon: (name: "avani10") => {
        return 10
    },
    githubToken: "ava110"
}

// In this way we can make some changes in our predefined interface
// It is called "REOPENING OF INTERFACE"

// We can also extend one interface to another

interface Admin extends User1 {
    role: "admin" | "ta" | "learner"
}

const kartikey: Admin = {
    dbId: 82,
    email: "k@k.com",
    userId: 1234,
    githubToken: "kart004",
    startTrial() {
        return "kartikey garg"
    },
    getCoupon(ka11) {
       return 11 
    },
    role: "admin"
}

export {}



//Make sure the name of your interface must not be same as the name of interface in libray and packages you are installing.
// MAKe SURE TO READ THE DOCUMENTATION