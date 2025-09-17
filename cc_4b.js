// Coding Challenge 4a

//step 2: 
const products = [
    {sku:"A-001", name:"phone case", category:"electronics",price:25.00,inventory:50 },
    {sku:"B-002", name:"apple", category:"groceries",price:2.00,inventory: 25 },
    {sku:"C-003", name:"lamp", category:"household",price:30.00,inventory:60 },
    {sku:"D-004", name:"shirt", category:"apparel",price:40.00,inventory:40 },
    {sku:"E-005", name:"earphones", category:"electronics",price:10.00,inventory:15}
];

//step 3:

for (let product in products) {
    let discount = 0;

    switch (product.category) {
        case "electronics":
            discount = .20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "groceries":
        case "household":
            discount = .10;
            break;
            default:
              discount = 0;
    }
    let promoPrice = product.price - (product.price * discount);
    product.promoPrice= promoPrice.toFixed(2);
}

console.log(products);



