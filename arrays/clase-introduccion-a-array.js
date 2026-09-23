// How to create an arrya

// 1. New Arraya() or Array()

const fruits = Array("Apple", "Banana", "Cherry");
console.log(fruits);

const justOneNumber = Array(27);
console.log(justOneNumber); // Output: [ <27 empty items> ]

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [ 1, 2, 3, 4, 5 ]

// 2. Array literal syntax

const colors = ["Red", "Green", "Blue"];
console.log(colors); // Output: [ 'Red', 'Green', 'Blue' ]

const oneNumber = [27];
console.log(oneNumber); // Output: [ 27 ]

const emptyArray = [];
console.log(emptyArray); // Output: []

const mixedArray = [
	1,
	"Hello",
	true,
	null,
	undefined,
	{ name: "John" },
	[1, 2, 3],
];
console.log(mixedArray); // Output: [ 1, 'Hello', true, null, undefined, { name: 'John' }, [ 1, 2, 3 ] ]

// Acesing array elements

const firstFruit = fruits[0];
console.log(firstFruit); // Output: Apple

// Length property

const numberOfFruits = fruits.length;
console.log(numberOfFruits);
