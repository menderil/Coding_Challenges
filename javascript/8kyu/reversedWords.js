//Complete the solution so that it reverses all of the words within the string passed in. 

function reverseWords(str){
    //split string
    // let arr = str.split(' ');
    //reverse array
    // arr.reverse();
    //join to string
    // str = arr.join(' ');
    //return string
    // return str;

    //or all in one line
    return str.split(' ').reverse().join(' ');
}