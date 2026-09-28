class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
}

const persona1 = new Persona("Alice", 25);

console.log(persona1);

persona1.nuevoMetodo = function () {
	console.log(`Mi Nombre es ${this.nombre}`);
};

persona1.nuevoMetodo();
