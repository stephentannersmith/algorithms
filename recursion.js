// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSigma(num) {
    if (num < 1) {
        return 0;
    }
    return num + rSigma(num-1)
}

// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

// accept number
// check if num is greater than 1
// multiply by num by num - 1


function rFact(num) {
    if (num < 2) {
        return 1;
    }
    else if (isNan(num)) {
        throw "Please use a valid integer."
    }
    
    var intNum = Math.trunc(num)
    return intNum * rFact(num-1);
}

var result = rFact(6.1);


// Recursive Fibonacci
// Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: 

// rFib(2) = 1 (0+1); 

// rFib(3) = 2 (1+1); 

// rFib(4) = 3 (1+2); 

// rFib(5) = 5 (2+3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.

// find sum of the numbers leading up to the given number. 

function rFib(num) {
    if (num === 0) {
        return 0
    }
    else if (num === 1) {
        return 1
    }
    return rFib(num-1) + rFib(num-2)
}

// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 
// rBinarySearch([1,3,5,6],4) = false; 
// rBinarySearch([4,5,6,8,12],5) = true.

function rBinary(arr, value) {
    var mid = Matth.floor(arr.length/2);
    if (arr[mid] === value) {
        return true;
    }
}