/*
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

348597 => [7,9,5,8,4,3]
0 => [0]
*/
function digitize(n) {
    if (n===0){
        return [0];
    }
    //split number into an array
    let reversed = [];
    while(n){
        const last = n % 10;
        reversed.unshift(last);
        n = Math.floor(n/10);
    }
    //reverse and return the array
    return reversed.reverse();
}