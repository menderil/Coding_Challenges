// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2)
{
  // check operation
  if(operation ==='+'){
    return addition(value1, value2);
  }else if (operation ==='-'){
    return subtraction(value1, value2);
  }else if (operation ==='*'){
    return multiplication(value1, value2);
  }else if (operation ==='/'){
    return division(value1, value2);
  }
}

let addition = (a, b) => a + b;
let subtraction = (a, b) => a - b;
let multiplication = (a, b) => a * b;
let division = (a, b) => a / b;