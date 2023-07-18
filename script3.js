const basket = {
    goods: [
        {
            name: "🍎",
            price: 25,
        },
        {
            name: "🍋",
            price: 13,
        },
        {
            name: "🍓",
            price: 31,
        },
    ],
    showGoods() {
        const arr = this.goods;
        const products = [];
        for (const i of arr) {
            products.push(i.name);
        }
        return products;
    },
    addGoods(name, price) {
        const a = this.goods;
        this.goods.push(
            {
                name,
                price,
            }
        )
        return a;
    },
    removeGoods(nameToRemove) {
        const arr = this.goods;
        for (const i of arr) {
            if (i.name === nameToRemove) {
                const index = arr.indexOf(i);
                this.goods.splice(index, 1);
            }
        }
        return arr;
    }
};

const { goods: [{ name: apple, price: applePrice }, { name: lemon, price: lemonPrice }, { name: strawberry, price: strawberryPrice }]} = basket;

console.log(apple, lemonPrice, lemon, strawberry);