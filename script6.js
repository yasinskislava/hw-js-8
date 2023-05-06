console.log("---------------Завдання 6---------------");
const a = [678, 346, 896, 235, 293, 911, 654, 402, 106, 215];
let max = 0;
for (const i of a) {
    if (i > max) max = i;
}
console.log(max);
console.log("-----Або-----");
max = 0;
for (let i = 0; i < a.length; i++){
    if (a[i] > max) max = a[i];
}
console.log(max);