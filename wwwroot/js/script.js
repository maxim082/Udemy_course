'use strict'

let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let appData = {
    money: money,
    time: new Date(time),
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let count = +prompt('Сколько у вас обязательных статей расходов?')

for (let a = 0; a < count; a++) {
    let answer1 = prompt('Введите обязательную статью расходов в этом месяце');
    let answer2 = prompt('Во сколько обойдется?');

    if (answer1.length == 0 || answer2.length == 0) {
        console.log('Ошибка ввода данных');
        break;
    } else {
        appData.expenses[answer1] = answer2;
    }
}

appData.moneyPerDay = appData.money/30;

alert(`Бюджет пользователя на 1 день ${appData.moneyPerDay}`);

console.log(appData);