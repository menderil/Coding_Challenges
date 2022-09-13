//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function(list){
    let min = list[0];

    list.forEach(element => {
        if(element < min){
            min = element;
        }
    });

    return min;
}

var max = function(list){
    let max = list[0];

    list.forEach(element => {
        if(element > max){
            max = element;
        }
    });

    return max;
}