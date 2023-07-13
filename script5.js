//Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
//Повертає масив значень певної властивості prop з кожного об'єкта в масиві.`

function getAllPropValues(arr, prop) {
    const ans = [];
    for (const i of arr) {
        ans.push(i[prop]);
    }
    return ans;
}


const array = [
    {
        name: "Max",
        age: 29,
    },
    {
        name: "Oleg",
        age: 17,
    },
    {
        name: "Alex",
        age: 34,
    }
];

console.log(getAllPropValues(array, "age"));