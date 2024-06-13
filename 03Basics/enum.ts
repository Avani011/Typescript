/* we are using enums to restrict the user's choice in our 
program. */

// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2

// if (seat === 0) {
    
// }

//This is not a good code whatif somebody changes the value og AISLE
// So, in this scenario enums come to picture

enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}

const avseat = SeatChoice.AISLE

/* IN this case we can have only 4 options from which user
can select, and when we hover over AISLE we can see it is 
an enum member with default value 0 which cannot be changed.*/

// if we want to change it we have to just make changes in its
// definition 

enum SeatChoice1 {
    AISLE = 10,
    MIDDLE,
    WINDOW,
    FOURTH
}

//By changing value of aisle all the values of variable comes after it changes.

enum SeatChoice2 {
    AISLE = "ais",
    MIDDLE = "mid",
    WINDOW = "win",
    FOURTH = "for"
}

enum SeatChoice3 {
    AISLE = "ais",
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

// This are the 4 ways to define enums

/* There is one more thing comes up in case of enum when we 
compile our code in javascript it will provide us too much of
the code which is not a good practise. to avoid this we are using
const before enum to reduce the lines of code in javascript. */

const enum SeatChoice4 {
    AISLE = "ais",
    MIDDLE = 3,
    WINDOW,
    FOURTH
}