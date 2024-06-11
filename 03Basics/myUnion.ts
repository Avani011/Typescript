/* Whenever you need to assign multiple datatypes instead of using sny we can make use of "UNION"
which helps us to assign 2 or more datatypes to array, object etc. */

let score: number | string = 33

//Now we can assign score as both string and number
score = 55
score = "44"
//And if we remove string it will give us error lines

/*LET: if we are creating an application with user and admin and you are
a user right now but in future maybe you became adminn. In this scenario
we hve solution as: */

type User = {
    name:string
    id: number
}

type Admin = {
    username :string
    id: number
}

let avani: User | Admin = {name: "avani", id: 1103}

avani = {username:"avani110", id: 1103}


//IN CASE OF FUNCTIONS:

function getDbId(id: number | string) {
    console.log(`DB Id id : ${id}`)
}

getDbId(3)
getDbId("4")

function getDBID(id: number | string) {
    //id.toLowerCase()
    if (typeof id === "string") {
        id.toLowerCase()
    }
    else{
        id+2
    }
}

/*in LINE 40: the TS is smart enough to not allowing the user to perform 
the string functions.
It is treating number and string as a whole new combined datatype and to 
perform these functions we have to check whether id is string or number. */



// IN CASE OF ARRAY:

//const data: number[] = [1, 2, 4, "4"] , here we got array
//and we want both of the datatype number and string

/*const data: string[] | number[] = [1, 2, 3, "4"] it can either be all the no.
or a string it cannot be a mixed array*/

const data: string[] | number[] = [1, 2, 3, 4]

// FOR BOTH :

const data1 : (string | number) [] = [1, 2, "3", "4"]



//You can strict your variables to one value : LITERAL ASSIGNMENT

let pi: 3.14 = 3.14
//pi =233
//This will produce error lines 

//IF WE WANT TO HAVE SOME USFUL CASE EXAMPLE:
//LET: we want seat allotment in aeroplane

let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = "aisle"
//seatAllotment = "crew" , it is not allowed, reserve only for crew