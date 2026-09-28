const promise = new Promise((resolved, reject) => {
	setTimeout(() => {
		let operationSucessful = true;
		if (operationSucessful) {
			resolved("La Operacion fue exitosa");
		} else {
			reject("Fallo la operacion");
		}
	}, 2000);
});

promise
	.then((sucessMessage) => {
		console.log(sucessMessage);
	})
	.catch((errorMessage) => {
		console.log(errorMessage);
	});
