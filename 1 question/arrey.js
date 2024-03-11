const Array1 = [23, 9, 5, 12, 90];
const Array2 = [45, 19, 85];
const Array3 = [2, 61, 5, 30, 88, 11];
const mergedArray = Array1.concat(Array2, Array3);

// Math.max function call to find the largest element in the mergedArray
// The spread operator (...) in JavaScript is used to expand an iterable object
const largestElement = Math.max(...mergedArray);
console.log("Largest Element:", largestElement);
