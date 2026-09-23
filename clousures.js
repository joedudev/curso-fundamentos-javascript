function outerFunction() {
	let outerVariable = "I am from the outer function";
	function innerFunction() {
		console.log(outerVariable);
	}
	return innerFunction;
}

const clousureExample = outerFunction();
clousureExample(); // Output: I am from the outer function

function createCounter() {
	let count = 0;
	return function () {
		count++;
		console.log(`Current count: ${count}`);
	};
}

const counterA = createCounter();
counterA();
counterA(); // Output: Current count: 2

const counterB = createCounter();
counterB();

function outer() {
	let message = "Hello, ";
	function inner(name) {
		console.log(message + name);
	}
	return inner;
}

const clousureA = outer();
const clousureB = outer();

clousureA("Alice"); // Output: Hello, Alice
clousureB("Bob"); // Output: Hello, Bob
