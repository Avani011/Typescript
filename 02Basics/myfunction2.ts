//PROBLEM : we are returning the string instead of no. and no error is popping up

function addT(num:number) {
    // return num +2
    return "hello"
}

//SOLUTION

function add(num:number): number{
    return num+2
}


// PROBLEM: that we are unable to define type to the function as here we are returning the two values string and boolean both

function getValue(myVal:number) {
    if (myVal > 5){
        return true
    }
    return "200 OK"
}

// SOLUTION: it will be discussed later !!!


// PROBLEM: how we can assign type to arrow functions??
const getHello = (s: string): string  => {
    return ""
}


const heros = ["thor", "spiderman", "ironman"]
//const heros = [1, 2, 3]


heros.map((hero): string => {
    return `hero is ${hero}`
    //return 1  
})

//Typescript automatically gets what type of array is present when it is string, it assign hero as string and in case of number, it assign heros to number type
// You should be very careful about the type of map