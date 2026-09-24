const persona = {
	nombre: "John",
	edad: 30,
	direccion: {
		calle: "Avenida insurgentes 187",
		ciudad: "CDMX",
	},
	saludar() {
		console.log(`Hola, mi nombre es ${persona.nombre}`);
	},
};

console.log(persona);
persona.saludar();

persona.telefono = "555-555-5555";

console.log(persona);

persona.despedir = () => {
	console.log(`Adios`);
};

console.log(persona);

persona.despedir();

delete persona.telefono;

console.log(persona);

delete persona.despedir;

console.log(persona);
