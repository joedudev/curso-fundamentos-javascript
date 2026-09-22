// 1. Tipo Entero y Decimal
const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

// 2. Notación Científica
const cientifico = 1.23e5;
console.log(cientifico);

// 3. Infinitos y NaN
const infinito = Infinity;
const negativoInfinito = -Infinity;
const noEsNumero = NaN;

console.log(infinito, negativoInfinito, noEsNumero);

// 4. Operaciones aritméticas - Suma, Rsta, Multiplicación, División y Módulo
const suma = 10 + 5;
const resta = 10 - 5;
const multiplicacion = 10 * 5;
const division = 10 / 5;

console.log(suma, resta, multiplicacion, division);

// Modulo y exponenciación
const modulo = 10 % 3;
const exponenciacion = 2 ** 3;

console.log(modulo, exponenciacion);

// Precision

const resultado = 0.1 + 0.2;
console.log(resultado); // Muestra 0.30000000000000004
console.log(resultado.toFixed(1));
console.log(resultado == 0.3);

// Operaciones Avanzadas

const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-10);
const aletaorio = Math.random();
console.log(raizCuadrada, valorAbsoluto, aletaorio);
