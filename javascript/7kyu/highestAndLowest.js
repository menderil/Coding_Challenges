// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers){
    //split string into array
    let arr1 = numbers.split(' ')
    
    //find highest and lowest in array
    //convert array items into a numbers to compare
    let highest = Number(arr1[0])
    let lowest = Number(arr1[0])
    
    for(let i = 0; i < arr1.length; i++){
      if(Number(arr1[i]) > highest){  
        highest = Number(arr1[i])
      }else if(Number(arr1[i]) < lowest){
        lowest = Number(arr1[i])
      }
    }
    
    //return results
    return `${highest} ${lowest}`
  }