// Funciones puras
// Misma entrada, misma salida

// Funciones impuras
//  Side Effects
// 1. Modificar variables globales
// 2. Modificar parámetros de entrada
// 3. Llamar a funciones externas - Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulacion del DOM
// 6. Obtener la hora actual

function sumaPura(a, b) {
	return a + b;
}

function sumaImpura(a, b) {
	console.log(`A: ${a}, B: ${b}`); // Side Effect: Imprime en consola");
	return a + b;
}

let total = 0;

function sumaWithSideEffect(a, b) {
	total += a + b;
	return total;
}

// Funcion Pura

function square(x) {
	return x * x;
}

function addTen(y) {
	return y + 10;
}

const number = 5;
const finalResult = addTen(square(number));
