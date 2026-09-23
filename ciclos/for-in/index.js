const listaDeCompras = {
	manzanas: 5,
	naranjas: 10,
	platanos: 7,
	uvas: 3,
};

for (const fruta in listaDeCompras) {
	console.log(fruta);
}

for (const fruta in listaDeCompras) {
	console.log(`${fruta}: ${listaDeCompras[fruta]}`);
}
