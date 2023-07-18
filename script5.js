const arr = [1, 54, 92, 31, 53, 56, 83, 46];

let biggest = Math.max(arr);

let smallest = Math.min(arr);

console.log(biggest);

console.log(smallest);

biggest = Math.max(...arr);

smallest = Math.min(...arr);

console.log(biggest);

console.log(smallest);