console.log("---------------Завдання 7---------------");
const a = [678, 346, 896, 235, 293, 911, 654, 402, 106, 215];
for (const i of a) {
    if (i % 2 === 0) console.log(i);
}
console.log("-----Або-----");
for (let i = 0; i < a.length; i++){
    if (a[i] % 2 === 0) console.log(a[i]);
}