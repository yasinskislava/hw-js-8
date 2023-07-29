const people = [
{ name: 'John', surname: 'Doe', age: 32, occupation: 'programmer' },
{ name: 'Jane', surname: 'Lee', age: 26, occupation: 'teacher' },
{ name: 'Mike', surname: 'Watson', age: 42, occupation: 'engineer' },
{ name: 'Emily', surname: 'Brad', age: 29, occupation: 'designer' }
];

const ans = [];
people.map((element, index) => ans.push({ id: index, fullName: element.name + " " + element.surname }));
console.log(ans);

// Спосіб розв'язування цього завдання за допомогою reduce знаходиться в наступному файлі