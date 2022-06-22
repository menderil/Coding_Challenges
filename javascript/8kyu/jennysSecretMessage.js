/*
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

function greet(name){
    //original function has the return before the if loop, so it would never run
    //return "Hello, " + name + "!";
    if(name === "Johnny"){
      return "Hello, my love!";
    }
    //only runs if name != :Johnny
    return "Hello, " + name + "!";
}
