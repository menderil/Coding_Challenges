/*Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.
Example:

h = 0
m = 1
s = 1

result = 61000*/

function past(h, m, s){
    let result = 0
    //convert each input to milliseconds and add to result
    result += h * 3600000
    result += m * 60000
    result += s * 1000
    //return result
    return result
}