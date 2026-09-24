// Filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

// reduce + caso uno

const numvbersReduce = [1, 2, 3, 4, 5];
const sum = numvbersReduce.reduce((acc, cur) => acc + cur, 0);

console.log(numvbersReduce);
console.log(sum);

// reduce + caso 2

const words = ["Apple", "Banana", "Hello", "Bye", "Banana", "Bye", "Bye"];

const wordFrecuency = words.reduce((acc, cur) => {
	if (acc[cur]) {
		acc[cur]++;
	} else {
		acc[cur] = 1;
	}
	return acc;
}, {});

console.log(wordFrecuency);
