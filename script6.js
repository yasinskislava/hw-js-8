// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я '
// продукту(значення властивості name).Повертає загальну вартість продукту(ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

function calculateTotalPrice(allProdcuts, productName) {
    let ans = 0;
    for (const i of allProdcuts) {
        if (i.name === productName) {
            ans = i.price * i.quantity;
        }
    }
    return ans;
}

const arr = [
    {
        name: "lemon",
        price: 35,
        quantity: 10,
    },
    {
        name: "pear",
        price: 20,
        quantity: 15,
    },
    {
        name: "apple",
        price: 40,
        quantity: 5,
    },
];

console.log(calculateTotalPrice(arr, "apple"));