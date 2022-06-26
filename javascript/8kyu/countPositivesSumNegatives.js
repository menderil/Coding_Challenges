/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
    //check if input array is null or empty
    if(input === null || input.length === 0){
        return [];
    }

    let positiveCount = 0;
    let negativesSum = 0;
    //to track both things

    //itterate through input array
    for(i = 0; i < input.length; i++){
        //if value is positive, add 1 to positiveCount
        if(input[i] > 0){
            positiveCount++;
        }else{
            //if negative, add it to negativesSum
            negativesSum += input[i];
        }
    }

    return [positiveCount, negativesSum];
}