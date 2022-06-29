/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
let spaceIndex; //to hold the index of the space in the name
//loop through name to find space
    for(let i = 0; i <name.length; i++){
        if(name[i] === ' '){
            spaceIndex = i;
        }
    }
    //converts to uppercase and returns
    return (`${name[0]}.${name[spaceIndex + 1]}`).toUpperCase();
}