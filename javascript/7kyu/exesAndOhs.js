// /Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let xCount = 0; 
    let oCount = 0;
    let array = str.split('');

    array.forEach(element =>{
        if(element.toLowerCase() == 'x'){
            xCount += 1;
        }
        else if(element.toLowerCase() == 'o'){
            oCount +=1;
        }
    })
    if(xCount == oCount){
        return true;
    }
    return false;
}
