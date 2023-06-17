// This function will return a boolean (true or false) 
// based on whether the argument passed in is equal 
// to "blue" in any form, ie: Blue, BLue, blue, BLUE
// This is accomplished by converting the parameter
// to lowercase and then comparing the result to "blue"

function isBlue(word) {
    return word.toLowerCase() === "blue"
}

console.log(isBlue("BlUE"));
console.log(isBlue("blue"));
console.log(isBlue("BLue"));
console.log(isBlue("BLUE"));
console.log(isBlue("blUE"));
console.log(isBlue("yellow"));