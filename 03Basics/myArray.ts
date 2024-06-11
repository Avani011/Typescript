const superHeros1 = []
//this is an array with type never
// so whenever you assign any empty array you must provide its type

const superHeros2: [] = []
//this will also assign never type to our array and is not a correct way of writing or declaring empt arrays

const superHero: string[] = []
// this is the correct syntax of assigning an empty array to a variable

//And now if you push something to it it will not give any error line
superHero.push("spiderman")

//ANOTHER WAY 1:
const heroPower: Array<number> = []
heroPower.push(2)

//We can also assign some user made type to arrays
type student = {
    name:string
    isActive: boolean
}

const allStudents: student[] = []

allStudents.push({name:"Avani", isActive:true})

//ANOTHER TYPE 2: ARRAY INSIDE ARRAY
const MLModels: number[][] = [
    [255,255,255],
    [33,33,33]
]