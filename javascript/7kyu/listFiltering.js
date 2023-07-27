//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    for(i = l.length+1; i >= 0; i--){
        if(typeof l[i] == 'string'){
            l.splice(i, 1);
        }
    }
    return l;
}

filter_list([1,2,"a","b"])