// capacidades que tienen las funciones al iguasl que otros objetos

// 1. Pasar Funciones como argumentos

function a() {}
function b() {}
b(a); // Pasando la función a como argumento de la función b

// 2. retornar funciones desde otras funciones

function a() {
	function b() {}
	return b;
}

// 3. Asignar funciones a variables -> Expresion de Funcion

const a = function () {};

// 4. Tener propiedades y metodos -> Son objetos de primera clase

function a() {}
const obj = {};
a.call(obj); // Llamando a la función a con el contexto del objeto obj

// 5.  Anidar funciones

function a() {
	function b() {
		function c() {}
		c();
	}
	b();
}
a(); // Llamando a la función a, que a su vez llama a b y c

// 6. Es posible almacenar funciones en objetos

const rocket = {
	name: "Falcon 9",
	launch: function () {
		console.log(`${this.name} is launching!`);
	},
};

rocket.launch(); // Llamando al método launch del objeto rocket
