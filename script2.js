const collection = [
    {
        name: "Max",
        status: "online",
    },
    {
        name: "Oleg",
        status: "offline",
    },
    {
        name: "Stepan",
        status: "online",
    },
];

const [
  { name: name1, status: status1 },
  { name: name2, status: status2 },
  { name: name3, status: status3 },
] = collection;

console.log(status1, name2, status3);