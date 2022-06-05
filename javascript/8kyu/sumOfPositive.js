/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/

function positiveSum(arr) {
    let sum = 0;
    //iterate throught the given array, check if the number is positive, then add it to sum
    arr.forEach(element => {
        if(element > 0){
            sum += element;
        }
    });
    return sum;
}

// let testArray = [1,-4,7,12];
// positiveSum(testArray);