const amount = Number(prompt("Input amount of money, 0 to 9999999", 100));
const discount = Number(prompt("Input discount, 0 to 99", 10));

const count = (amount, discount) => {
    const finalPrice = (amount - (discount * amount / 100)).toFixed(2);
    const saved = (amount - finalPrice).toFixed(2); 
    // eslint-disable-next-line no-console
    console.log(
        `Price without discount: ${amount}\n
        Discount: ${discount}%\n
        Price with discount: ${finalPrice}\n
        Saved: ${saved}`
    )
}

const validate = (amount, discount) => {
    if (isNaN(amount) || isNaN(discount) || amount < 0 || amount > 9999999 || discount < 0 || discount > 99) {
            // eslint-disable-next-line no-console
            return console.log("Invalid input data");
        }
        count(amount, discount);
}
validate(amount, discount);

