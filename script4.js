// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати
// працівників і повертає її.Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

function countTotalSalary(employees) {
    const values = Object.values(employees);
    let total = 0;
    for (const i of values) {
        total += i;
    }
    return total;
}

const workers = {
    Max: 1600,
    Oleg: 2000,
    Andriy: 1300,
    David: 1700,
}

console.log(countTotalSalary(workers));