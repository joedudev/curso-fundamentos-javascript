/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
	{
		username: "andres",
		password: "123",
	},
	{
		username: "caro",
		password: "456",
	},
	{
		username: "mariana",
		password: "789",
	},
];

const usersTimeline = [
	{
		username: "Estefany",
		timeline: "Me encata Javascript!",
	},
	{
		username: "Oscar",
		timeline: "Bebeloper es lo mejor!",
	},
	{
		username: "Mariana",
		timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
	},
	{
		username: "Andres",
		timeline: "Yo hoy no quiero trabajar",
	},
];

// Ingreso y almacenaiento de usuario y contrasena

// Verificar si el usuario existe
// Verificar la password

const dataVerification = () => {
	const usernameLog = prompt("Ingresa Tu Usuario");
	const passwordLog = prompt("Igresa tu contrasena");
	for (let index = 0; index < usersDatabase.length; index++) {
		if (
			usernameLog == usersDatabase[index].username &&
			passwordLog == usersDatabase[index].password
		) {
			return console.table(usersTimeline);
		} else {
			return console.error(`El usuario o la contraseña son incorrectos`);
		}
	}
};

dataVerification();
