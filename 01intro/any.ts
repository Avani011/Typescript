let hero;

function getHero( ){
    return "thor" 
    //you can change it to true, but it is inferring the meaning of our code
}

hero = getHero() 
//here you can see hero is of type any, this is not good


// to avoid all these cases just do 
let hero1 : string;

//now if we change its value of return it will give us erorr line