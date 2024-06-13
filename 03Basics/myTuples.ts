const user : (string | number) [] = ["av", 1]

/* in this case either we can write number first than string 
or we can write it as string first than number. But whatif we 
want to write them in specific order :

Than TUPLES come into picture : */

let Tuser: [string, number, boolean]

Tuser = ["avani", 21, true]
//we cannot change its order it will give us error lines
// Tuser = [true, "avani", 21]

// let rgb: [number, number, number] = [255, 234, 45, 9]
// You cannot add extra number to it in this form

type User = [number, string]
const newUser: User = [112, "avani"]

// BUT there's error or we can say behaviour of TUPLES in TS

newUser[1] = "kartikey"
//here there is no restriction in overriding the value in tuple

newUser.push(112)
//here we are allowed to push the Number or it can be done by using any other method of array

//TUPLES: are like arrays or we can say array with order restrictions