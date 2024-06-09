function addTwo(num) {
    //num.toUpperCase() (it shouldn't be allowed)
    return num+2
}

addTwo(5)
//addTwo("5")
//here we can see the type is any and nyone can change the num to string

export {}

//To avoid this we can do and there will be no mischeif 

function add(num:number) {
    return num+2
}

add(5)


function getUpper(val: string) {
    return val.toUpperCase()
}

getUpper("avani")
//getUpper(4) this cant be done we will get the error lines



//function signUpUser(name, email, isPaid){}
//Both of these will give us error, as we are not assigning value to params
//signUpUser(1, 2, 3)

function signUpUser(name: string, email: string, isPaid: boolean){}

signUpUser("avani", "avaniagarwal110@gmail.com", true)

//Up till now we have to pass the exact no. of arguments as parameters and if want to pass only 2 of them 

let loginuser = ( name: string, email: string, isPaid: boolean = false) => {}

//how can we pass default values ??

//we have to pass some value to isPaid at dunction declaration 

loginuser("a", "a@a.com")
//it is showing error line and we have to pass isPaid value also
