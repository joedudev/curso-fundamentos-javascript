function calculatedDiscountedPrice(price, discountPercentage) {
	const discount = (price * discountPercentage) / 100;
	const discountedPrice = price - discount;
	return discountedPrice;
}

const originalPrice = 100;
const discountPercentage = 20;

const finalPrice = calculatedDiscountedPrice(originalPrice, discountPercentage);
console.log(`El precio original es: $${originalPrice}`);
console.log(`El porcentaje de descuento es: ${discountPercentage}%`);
console.log(`El precio con descuento es: $${finalPrice}`);
