/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
    let digitArray = [];
    //break string into digits
    for(let i = 0; i < x.length; i++){
        digitArray[i] = parseInt(x[i]);
    }
    //test each digit & convert
    digitArray.forEach((digit, index) => {
        if(digit < 5){
            digitArray[index] = 0;
        }else{
            digitArray[index] = 1;
        }
    });
    //rejoin into string
    return digitArray.join('');
}

