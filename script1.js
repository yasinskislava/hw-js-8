const user = {
    hobby: "hiking",
    premium: true,
}
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const arr = Object.keys(user);
console.log(arr);

for (const i of arr) {
    console.log(i + ":" + user[i]);
}




 


