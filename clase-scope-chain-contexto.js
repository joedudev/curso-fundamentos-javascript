const productName = "Smartphone";
const price = 499;
const brand = "TechCo";

function getProductDetails() {
	const productName = "Laptop";
	const price = 999;

	return `Product: ${productName}, Price: $${price}, Brand: ${brand}`;
}

console.log(getProductDetails()); // Output: Product: Laptop, Price: $999, Brand: TechCo

console.log(
	`Global Product: ${productName}, Price: $${price}, Brand: ${brand}`,
); // Output: Global Product: Smartphone, Price: $499, Brand: TechCo
