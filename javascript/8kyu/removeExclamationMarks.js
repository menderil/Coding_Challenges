//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    //split into an array
    let arr = s.split('')
    //loop through array backwards
    for(i = arr.length - 1; i >= 0; i--){
        //if current item is '!', splice it out
        if(arr[i] == '!'){
            arr.splice(i, 1)
        }
    }
    //rejoin and return
    return arr.join('')
}