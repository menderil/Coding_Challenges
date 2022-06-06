// Given an array of integers your solution should find the smallest integer.

// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      //set variable to first value in array
        let smallestValue = args[0];
      //loop through array
      args.forEach(item =>{
          //if the value is smaller than smallestValue, set smallestValue to that new value
          if(item < smallestValue){
              smallestValue = item;
          }
      })
      return smallestValue;
      //return smallestValue
    }
  }