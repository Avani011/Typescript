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