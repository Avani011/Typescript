//Here we learn 3 things:
//1. readonly keyword: used when you wnat that no one can manipulate your variable.
//2. ? : when you want a variable which is not neccessary to have value while defining it.
//3. & : for combining 2 or more types


type Usern = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetail?: number //this is syntax for ?
}


let myUser: Usern ={
    _id:"1234",
    name:"a",
    email:"a@a.com",
    isActive:false
}

//Now we try to assign anythin to _id it will show us error lines
//if you uncomment this in ts it will give error but in js it will not sho any error.
//myUser._id = "12345";


// COMBINING 2 OR MORE TYPES USING &

type cardNumber = {
    cardnum: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export{}