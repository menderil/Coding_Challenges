// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null.

// The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

//Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number)

function firstNonConsecutive (arr) {
    if(arr.length > 1){ //so it doesn't test empty or 1 item arrays
        //loop through all but the last item
        for(let i = 0; i < arr.length-1; i++){
            //compare the current item to the next
            if ((arr[i]+1) != arr[i+1]){
                //return the nonconsecutive number;
                return arr[i+1];
            }
        }
    }
    //if the array is consecutive, empty, or only has 1 item:
    return null;
}
