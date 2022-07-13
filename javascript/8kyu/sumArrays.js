//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Sum Numbers
function sum (numbers) {
    "use strict";
    
    let result = numbers.reduce( (previousValue, currentValue) =>{
        return previousValue + currentValue;
    }, 0);

    return result;
};
