// To Do 1

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

// split the string from its spaces by using string.split
// create a variable for the split string
// join it back using arr.join method

function removeBlanks(str) {
    var newStr = str.split(" ")
    return newStr.join("")
}


// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

// take a string
// break into an array
// loop through each index
// check if character is a digit
// compile a new str with only digits


function getDigits(str) {
    var numbers = [1,2,3,4,5,6,7,8,9];
    var numArr = [];
    var newArr = str.split("");
    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] in numbers) {
            numArr.push(newArr[i])
        }
    }
    numArr.join("")
    return numArr
}

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

// take a string
// split string into array with each word as an item
// then split each index item into a character array
// loop through array and split each array item into character array
// (nested) loop through first index of each character array and push into new array as capital letter
// restart loop for next index
// after loop is complete, join the string using no spaces

// function allCaps(str) {
//     var newStr = "";
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === false) {
//         }
//         else {
//             newStr += str[i][0].toUpperCase();
//         }
//     }
//     return newStr
// }

function acronym(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i-1] == " " || str[i] == str[0] || str[i] == "-") {
            newStr += str[i][0].toUpperCase();
        }
    }
    return newStr
}



// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 

// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

// take string
// set count variable to 0
// loop through array
// if a space, continue through loop
// if not, add to count
// return count 

function countNon(str) {
    var strArr = str.split("");
    var count = 0;
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] == " ") {
            continue;
        } 
        else {
            count++;
        }
    }
    return count;
}


// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.

// take a string array and value
// 