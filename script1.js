const arr = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];
const ans = arr.map(str => str[0] + str[str.length - 1]);
console.log(ans);