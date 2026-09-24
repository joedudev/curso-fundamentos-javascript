// Copy an array

const originalArray = [1, 2, 3, 4, 5];
const copiedOfAnArray = [...originalArray];

console.log(originalArray);
console.log(copiedOfAnArray);

// Combining Array

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combindedArray = [...array1, ...array2];

console.log(array1);
console.log(array2);
console.log(combindedArray);

// Created arrays

const baseArray = [1, 2, 3];
const arrayWithAdtionalElements = [...baseArray, 4, 5, 6];

console.log(baseArray);
console.log(arrayWithAdtionalElements);

// Pass elements to funcitons

function sum(a, b, c) {
	return a + b + c;
}

const numbers = [1, 2, 3];

const result = sum(...numbers);

console.log(result);
