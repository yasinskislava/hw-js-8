// Напиши сценарій керування особистим кабінетом інтернет - банку.Є об'єкт account в якому необхідно
// реалізувати методи для роботи з балансом та історією транзакцій.

const account = {
    balance: 2000,
    history: [],
    withdraw: function (money) {
        this.balance -= money;
        this.history.push(`З балансу було знято ${money} гривень`);
        console.log("Поточний баланс " + this.balance);
    },
    topup: function (money) {
        this.balance += money;
        this.history.push(`Баланс був поповнений на ${money} гривень`);
        console.log("Поточний баланс " + this.balance);
    },
    check: function () {
        this.history.push("Баланс був перевірений");
        console.log("Поточний баланс " + this.balance);
    },
    checkHistory: function () {
        for (const i of this.history) {
            console.log(i);
        }
    },
};

account.check();
account.withdraw(200);
account.topup(300);
account.checkHistory();