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

let answer1 = prompt('Введите обязательную статью расходов в этом месяце');
let answer2 = prompt('Во сколько обойдется?');

appData.expenses4[answer1] = answer2;

alert(`Бюджет пользователя на 1 день ${appData.money/30}`);

console.log(appData);