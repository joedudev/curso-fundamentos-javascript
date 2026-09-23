const greeting = function (name) {
	return `Hi, ${name}`;
};

// Arrow Function explicit return

const newGreeting = (name) => {
	return `Hi, ${name}`;
};

// Arrow funciotns implicit return

const newGreetingExplicit = (name) => `Hi, ${name}`;
const newGreetingExplicitWhitTowParameter = (name, lastName) =>
	`Hi, ${name} ${lastName}`;

// Lexical Binding

const finctionalCharacter = {
	name: "Uncle Ben",
	messageWithTradicionalFuncion: function (message) {
		console.log(`${this.name} says: ${message}`);
	},
	messageWithArrowFuncion: (message) => {
		console.log(`${this.name} says: ${message}`);
	},
};

finctionalCharacter.messageWithTradicionalFuncion(
	"With great power comes great responsability",
);
finctionalCharacter.messageWithArrowFuncion("Beware of Dr Octopus");
