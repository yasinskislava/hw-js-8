const friends = {
    friend1: {
        name: "Max",
        status: "online",
    },
    friend2: {
        name: "Oleg",
        status: "offline",
    },
    friend3: {
        name: "Stepan",
        status: "online",
    },
    friendsQuantity: 3,
};

const {
    friend1: { name: friend1Name, status: friend1Status },
    friend2: { name: friend2Name, status: friend2Status },
    friend3: { name: friend3Name, status: friend3Status },
} = friends;

console.log(friend1Name, friend2Status, friend3Name);
