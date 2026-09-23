// const greeting = function (name) {
// 	return `Hi, ${name}`;
// };

// // Arrow Function explicit return

// const newGreeting = (name) => {
// 	return `Hi, ${name}`;
// };

// // Arrow funciotns implicit return

// const newGreetingExplicit = (name) => `Hi, ${name}`;
// const newGreetingExplicitWhitTowParameter = (name, lastName) =>
// 	`Hi, ${name} ${lastName}`;

// // Lexical Binding

// const finctionalCharacter = {
// 	name: "Uncle Ben",
// 	messageWithTradicionalFuncion: function (message) {
// 		console.log(`${this.name} says: ${message}`);
// 	},
// 	messageWithArrowFuncion: (message) => {
// 		console.log(`${this.name} says: ${message}`);
// 	},
// };

// finctionalCharacter.messageWithTradicionalFuncion(
// 	"With great power comes great responsability",
// );
// finctionalCharacter.messageWithArrowFuncion("Beware of Dr Octopus");

// ---

```
// =================================================================
// DEMOSTRACIÓN PRÁCTICA: 'THIS' DINÁMICO VS. 'THIS' LÉXICO
// =================================================================

const heroe = {
  nombre: "Spider-Man",

  // ---------------------------------------------------------------
  // CASO 1: Función Tradicional (Enlace Dinámico)
  // El valor de 'this' se determina en TIEMPO DE EJECUCIÓN según quién
  // llama a la función (el objeto a la izquierda del punto).
  // ---------------------------------------------------------------
  saludoTradicional: function () {
    console.log("\n--- CASO 1: Función Tradicional como Método ---");
    console.log("Invocación: heroe.saludoTradicional()");
    console.log("¿A qué apunta 'this'?:", this); // Apunta al objeto 'heroe'
    console.log(`-&gt; Mensaje: ¡Hola! Soy ${this.nombre}`);
  },

  // ---------------------------------------------------------------
  // CASO 2: Arrow Function como Método Directo del Objeto
  // ¡CUIDADO! Las llaves {} de un objeto NO crean un ámbito (scope).
  // La arrow function no tiene su propio 'this', así que busca en su
  // ámbito léxico superior (el contexto Global).
  // ---------------------------------------------------------------
  saludoFlechaDirecto: () =&gt; {
    console.log("\n--- CASO 2: Arrow Function Directa en el Objeto ---");
    console.log("Invocación: heroe.saludoFlechaDirecto()");
    console.log("¿Las llaves {} del objeto crearon scope?: NO");
    console.log("¿A qué apunta 'this' léxico?: Contexto Global (Window / globalThis)");
    console.log("¿Existe 'nombre' en el objeto Global?: No (es undefined)");
    console.log(`-&gt; Mensaje: ¡Hola! Soy ${this.nombre}`);
  },

  // ---------------------------------------------------------------
  // CASO 3: Arrow Function DENTRO de un Método Tradicional (Callback)
  // ¡Aquí es donde brillan las Arrow Functions!
  // 'saludoConCallback' (tradicional) sí establece 'this' = heroe.
  // La Arrow Function interna hereda el 'this' de 'saludoConCallback'.
  // ---------------------------------------------------------------
  saludoConCallback: function () {
    console.log("\n--- CASO 3: Arrow Function dentro de un Callback ---");
    console.log("Invocación: heroe.saludoConCallback()");
    console.log("Contexto del método envolvente ('this'):", this.nombre);

    // Simulamos un retraso asíncrono
    setTimeout(() =&gt; {
      console.log("\n[Ejecutando Callback de setTimeout después de 1 segundo...]");
      console.log("La arrow function trepa al scope superior y toma 'this':", this.nombre);
      console.log(`-&gt; Mensaje: ${this.nombre} dice: ¡Un gran poder conlleva una gran responsabilidad!`);
    }, 1000);
  }
};

// =================================================================
// EJECUCIÓN DEL CÓDIGO Y SALIDA EN CONSOLA
// =================================================================

heroe.saludoTradicional();
heroe.saludoFlechaDirecto();
heroe.saludoConCallback();

```

---

### Lo que verás impreso en la Consola

```
--- CASO 1: Función Tradicional como Método ---
Invocación: heroe.saludoTradicional()
¿A qué apunta 'this'?: { nombre: 'Spider-Man', ... }
-&gt; Mensaje: ¡Hola! Soy Spider-Man

--- CASO 2: Arrow Function Directa en el Objeto ---
Invocación: heroe.saludoFlechaDirecto()
¿Las llaves {} del objeto crearon scope?: NO
¿A qué apunta 'this' léxico?: Contexto Global (Window / globalThis)
¿Existe 'nombre' en el objeto Global?: No (es undefined)
-&gt; Mensaje: ¡Hola! Soy undefined

--- CASO 3: Arrow Function dentro de un Callback ---
Invocación: heroe.saludoConCallback()
Contexto del método envolvente ('this'): Spider-Man

[Ejecutando Callback de setTimeout después de 1 segundo...]
La arrow function trepa al scope superior y toma 'this': Spider-Man
-&gt; Mensaje: Spider-Man dice: ¡Un gran poder conlleva una gran responsabilidad!
```