//Create a method to see whether the string is ALL CAPS.
// "c" -> False
// "C" -> True

String.prototype.isUpperCase = function() {
    
    //check each letter, if any is lowercase return false
    for (let i = 0; i < this.length; i++) {
        if(this.charAt(i) != this.charAt(i).toUpperCase()){
            return false;
        }
    }

    //no upppercase chars found
    return true;
}