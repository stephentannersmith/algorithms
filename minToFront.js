// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

// compare each array value to each other to find minimum value with loop
// store index of min in new variable
// loop through array again
// swap all numbers one space to the right of the stored index

function minToFront(arr) {
    var min = arr[0];
    var ind = 0;
    for (var i = 1; i <arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
            ind = i
        }
    }
    for (var x = ind; x > 0; x--) {
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr
} 