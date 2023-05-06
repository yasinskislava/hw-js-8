console.log("---------------Завдання 5---------------");
const a = ["mango", "pineapple", "pumkin", "pear", "watermelon"];
for (const i of a) {
    if (i.length > 5) {
        console.log(i);
    }
   
}
console.log("-----Або-----");
for (let i = 0; i < a.length; i++){
    if (a[i].length > 5) {
        console.log(a[i]);
    }
}