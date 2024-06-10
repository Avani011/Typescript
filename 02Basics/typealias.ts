type User = {
    name: string,
    email: string,
    isActive: boolean
};

//we are creating a type for User

function createUser1(user:User): User {
    return {name: "", email:"", isActive: true}
};

//Here, we are creating a new datatype or type named User
// function createUser1(user: string) {}
//just like other datatype we can pass User here.

createUser1({name: "", email:"", isActive: true});

//Always read Documentation also!!