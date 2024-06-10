const User = {
    name: "avani",
    email: "avani@mai.com",
    isActive: true
}

//This is not usecase of object. You can pass on the object to function or return it from function

function createUser({name:string, isPaid: boolean}) {}

// createUser() gives us error as it will take the object as param

createUser({name: "avani", isPaid: true})

//How function return the object??
function createCourse({name:string, price:number}):{} {
    return {name: "Reactjs", price: 399}
}


//we are unable to add extra info at tym of function call
//createUser({name: "avani", isPaid: true, email: "avani@xy.com"})

//But one thing we can do
let newUser = {name: "avani", isPaid: "true", email: "avani@xy.com"}

createUser(newUser)

//Here we got to know about weird behaviour of Typescript, we will resolve it later!!