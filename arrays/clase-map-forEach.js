// Methos that iterate over an Array
// Methos that DO NOT modify the original arra

const numbers = [1, 2, 3, 4, 5];
const squaredNumber = numbers.map((num) => num * num);

console.log(numbers);
console.log(squaredNumber);

// forEach

const colors = ["red", "pink", "blue"];
const iteratedColors = colors.forEach((color) => console.log(color));

console.log(colors);
console.log(iteratedColors);

// Fr to c converion

const temperaturasF = [32, 68, 95, 104, 212];
const temperaturasC = temperaturasF.map((f) => (5 / 9) * (f - 32));

console.log(temperaturasF);
console.log(temperaturasC);

// Excercise Sum of Eelemtns

const newNumbers = [1, 2, 3, 4, 5];

let sum = 0;

newNumbers.forEach((num) => (sum += num));

console.log(`Array of Number : ${newNumbers}`);
console.log(`Sum of Numbers: ${sum}`);
