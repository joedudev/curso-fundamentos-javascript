/* 
Requerimientos del reto:
1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline general.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningún timeline.
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
		timeline: "Me encanta Javascript!",
	},
	{
		username: "Oscar",
		timeline: "Bebeloper es lo mejor!",
	},
	{
		username: "Mariana",
		timeline: "A mi me gusta más el café que el té",
	},
	{
		username: "Andres",
		timeline: "Yo hoy no quiero trabajar",
	},
];

/**
 * Solicita al usuario sus credenciales mediante prompts del navegador.
 * @function
 * @returns {Object} Un objeto con el usuario y la contraseña ingresados.
 */
const solicitarCredenciales = () => {
	const usernameLog = prompt("Ingresa Tu Usuario").trim().toLowerCase();
	const passwordLog = prompt("Ingresa tu contraseña").trim();

	return { usernameLog, passwordLog };
};

/**
 * Valida si las credenciales ingresadas coinciden con algún registro en la base de datos.
 * @function
 * @param {string} username - El nombre de usuario ingresado.
 * @param {string} password - La contraseña ingresada.
 * @param {Array<Object>} database - La base de datos de usuarios.
 * @returns {boolean} Retorna true si las credenciales son válidas, false en caso contrario.
 */
const validarCredenciales = (username, password, database) => {
	for (let index = 0; index < database.length; index++) {
		if (
			username === database[index].username &&
			password === database[index].password
		) {
			return true; // Encontró coincidencia exacta
		}
	}
	return false; // Terminó el ciclo y no encontró coincidencia
};

/**
 * Controla el flujo principal de inicio de sesión de la red social.
 * @function
 */
const iniciarSesion = () => {
	// Paso 1: Obtener los datos ingresados
	const { usernameLog, passwordLog } = solicitarCredenciales();

	// Paso 2: Validar la existencia de las credenciales
	const esValido = validarCredenciales(usernameLog, passwordLog, usersDatabase);

	// Paso 3: Mostrar resultados según la validación (timeline general si es correcto)
	if (esValido) {
		console.log("¡Bienvenido/a al sistema!");
		console.table(usersTimeline); // Muestra el timeline general para todos
	} else {
		console.error("El usuario o la contraseña son incorrectos.");
	}
};

// Ejecución principal del sistema
iniciarSesion();
