// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// Input validation:
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0

function sumArray(array) {
    //checks if the input array is null, empty, or 1 item
    if(array == null || array.length <= 1){
      return 0
    }
    
    //sort array
    array.sort((a,b) => a - b)
    let sum = 0
    //go through all but the first and last item
    for(let i = 1; i < array.length-1; i++){
      sum += array[i]
    }
    return sum
  }