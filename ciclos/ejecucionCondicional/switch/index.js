let expr = "Papayas";

switch (expr) {
	case "Naranjas":
		console.log("Naranjas son $0.59 la libra.");
		break;
	case "Manzanas":
		console.log("Manzanas son $0.32 la libra.");
		break;
	case "Plátanos":
		console.log("Plátanos son $0.48 la libra.");
		break;
	case "Cerezas":
		console.log("Cerezas son $3.00 la libra.");
		break;
	case "Mangos":
		console.log("Mangos son $0.79 la libra.");
		break;
	case "Papayas":
		console.log("Papayas son $2.79 la libra.");
		break;
	default:
		console.log(`Lo siento, no tenemos ${expr}.`);
}
