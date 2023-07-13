// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

function countProps(obj) {
    const arr = Object.values(obj);
    const l = arr.length;
    return l;
}

const object = {
    age: 15,
    name: "Stanislav",
    job: "policeman",
}

console.log(countProps(object));