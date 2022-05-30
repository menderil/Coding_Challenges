// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


function even_or_odd(number) {
  if(number % 2 === 0){
      return "even";
  }else{
      return "odd";
  }
}

console.log(17);
console.log(even_or_odd(17));
console.log(18);
console.log(even_or_odd(18));