
//Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    //check if flower1 is even or odd
    //check if flower2 is even or odd
    //if they're not the same, then return true
    return ((flower1 % 2) != (flower2 % 2)) ? true : false; 
}
