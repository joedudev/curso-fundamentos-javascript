const numeroSecreto = Math.floor(Math.random() * 10) + 1;

const numeroJugador = parseInt(
	prompt("Adivina el número secreto entre 1 y 10:"),
);

console.log(`Este es el numero con el que juegas: ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
	console.log("¡Felicidades! Adivinaste el número secreto.");
} else {
	console.log("Lo siento, no adivinaste el número secreto.");
}
