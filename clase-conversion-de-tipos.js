// Explicit Type Casting

const string = "42";
const integer = parseInt(string);
console.log(integer, typeof integer);

const stringDecimal = "3.14";
const float = parseFloat(stringDecimal);
console.log(float, typeof float);

const binary = "1010";
const decimal = parseInt(binary, 2);
console.log(decimal, typeof decimal);

// Implicit Type Casting

const sum = "5" + 3;
console.log(sum, typeof sum); // "53" string

const sumWithBoolean = "3" + true;
console.log(sumWithBoolean, typeof sumWithBoolean); // "3true" string

const sumWithNumber = 2 + true;
console.log(sumWithNumber, typeof sumWithNumber); // 3 number

const stringValue = "10";
const numberValue = 15;
const booleanValue = true;

console.group("Implicit Type Casting Examples");
console.log(stringValue + stringValue);
console.log(stringValue + numberValue);
console.log(stringValue + booleanValue);
console.log(numberValue + stringValue);
console.log(numberValue + numberValue);
console.log(numberValue + booleanValue);
console.log(booleanValue + stringValue);
console.log(booleanValue + numberValue);
console.log(booleanValue + booleanValue);
console.groupEnd();
