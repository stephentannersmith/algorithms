// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, new_val){
    arr.push(new_val) 
    for (var i = 0; i < arr.length-1; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1]
        arr[arr.length-1] = temp
    }
}


function pushFront2(arr, new_val){
    arr.push(null)
    for (var i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1] 
    }
    arr[0] = new_val
}

Array.prototype.pushFront = function(new_val) {
    this.push(null)
    for (var i = this.length-1; i > 0; i--) {
        this[i] = this[i-1]
    }
    this[0] = new_val
}


// var example = [1,2,3,4,5,6]

// example.pushFront(5)
// console.log(example)

// console.log(arrTest)

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// save first value in temp
// shift all values to the left (towards index 0 by 1)
// return value of temp

function popFront(arr) {
    var temp = arr[0];
    for (var i = 0; i < arr.length-1; i++) {
        arr[i] = arr[i+1]
    }
    arr.pop();
    return temp
}

Array.prototype.popFront = function() {
    var temp = this[0];
    for (var i = 0; i < this.length-1; i++) {
        this[i] = this[i+1]
    }
    this.pop();
    return temp
}

// var ex3 = [1,2,3,4,5,6,7]
// var place = ex3.popFront();
// console.log(ex3, place)

// var example = [1,2,3,4]
// var example2 = popFront(example)
// console.log(example, example2)

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// take array value and place it in specified location
// shift all values to the right by 1

function insertAt(arr, ind, val) {
    arr[arr.length] = val;
    for (var i = arr.length-1; i > ind-1; i--) {
        var temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
}


// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

// hold initial value with temp
// swap given value with last value
// remove and return last value

function removeAt(arr, ind){
    var temp = arr[ind] 
    arr[ind] = arr[arr.length-1]
    arr[arr.length-1] = temp
    arr.pop();
}



// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

// loop through array
// if the index is even, store index value in temp
// swap with second value (directly to the right of it)

function swapPairs(arr){
    for (var i = 0; i < arr.length-1; i+=2) { 
            var temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
    }
}

var test1 = [1,2,3,4,5]
var test2 = [1,3,5,4]

var ex3 = swapPairs(test1)
console.log(swapPairs())
console.log(swapPairs(test2))

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// loop array
    // see if there is a key of 'array item' in itemsFound
    // if not, add that key
    // if so, delete dupe

// Second: Solve this without using any nested loops.