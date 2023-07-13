// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого
// (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в
// форматі "ім'я": "кількість задач".

function findBestEmployee(employees) {
    const keys = Object.keys(employees);
    const values = Object.values(employees);
    let m = 0;
    let index = -1;
    for (let i = 0; i < values.length; i++){
        if (values[i] > m) {
            m = values[i];
            index = i;
        }
    }
    return keys[index] + ":" + values[index];
}

const workers = {
    Max: 16,
    Oleg: 2,
    Andriy: 13,
    David: 17,
}

console.log(findBestEmployee(workers));