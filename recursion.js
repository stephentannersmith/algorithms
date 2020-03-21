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
    else if (Number != typeof num) {
        throw "Please use a valid integer";
    }
    return num * rFact(num-1);
}

var result = rFact(6.1);

// Flood Fill
// Most graphical “paint” applications have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. 

// Note: diagonally related pixels are not considered adjacent.

// 

function floodFill(canvas2D,startXY,newColor) {

}