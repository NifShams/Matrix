const hour = 3;
const productOne = ['bread', 'water', 'oil']; // Cost: 10
const productTwo = ['onion', 'milk', 'egg']; // Cost: 20
const productThree = ['meat', 'cola', 'fruits', 'fish']; // Cost: 30

let hours_worked = prompt("Enter hours worked: ");
let revenue = hours_worked * hour;

alert(`You have earned ${revenue}$. Here are the products you can buy:`);

let continueShopping = true;

while (continueShopping && revenue > 0) {
    let products = `
1. Product One ($10): ${productOne.join(', ')}
2. Product Two ($20): ${productTwo.join(', ')}
3. Product Three ($30): ${productThree.join(', ')}
4. Exit
`;

    let choice = prompt("Enter the number of the product category you want to buy:\n" + products);

    switch (choice) {
        case '1':
            if (revenue >= 10) {
                revenue -= 10;
                alert(`You bought Product One (${productOne.join(', ')}). Remaining revenue: $${revenue}`);
            } else {
                alert("You don't have enough revenue to buy this product.");
            }
            break;
        case '2':
            if (revenue >= 20) {
                revenue -= 20;
                alert(`You bought Product Two (${productTwo.join(', ')}). Remaining revenue: $${revenue}`);
            } else {
                alert("You don't have enough revenue to buy this product.");
            }
            break;
        case '3':
            if (revenue >= 30) {
                revenue -= 30;
                alert(`You bought Product Three (${productThree.join(', ')}). Remaining revenue: $${revenue}`);
            } else {
                alert("You don't have enough revenue to buy this product.");
            }
            break;
        case '4':
            continueShopping = false;
            alert("Thank you for shopping! Goodbye.");
            break;
        default:
            alert("Invalid choice. Please enter 1, 2, 3, or 4.");
            break;
    }

    if (revenue <= 0) {
        alert("You have run out of revenue. Thank you for shopping!");
        continueShopping = false;
    }
}
