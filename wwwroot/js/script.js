'use strict'

const BUDJET_REQUEST = 'Ваш бюджет на месяц?';
const DATE_REQUEST = 'Ваш бюджет на месяц?';
const COUNT_COSTS_REQUEST = 'Сколько у вас обязательных статей расходов?';
const NAME_COST_REQUEST = 'Введите обязательную статью расходов в этом месяце';
const VALUE_COST_REQUEST = 'Во сколько обойдется?';
const ERROR_MESSAGE = 'Ошибка ввода данных';

let money = +prompt(BUDJET_REQUEST);
let time = prompt(DATE_REQUEST);

let appData = {
    money: money,
    time: new Date(time),
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let count = +prompt(COUNT_COSTS_REQUEST)

appData.moneyPerDay = calculateMoneyPerDay(appData.money);

alert(`Бюджет пользователя на 1 день ${appData.moneyPerDay}`);

for (let a = 0; a < count; a++) {
    let answer1 = prompt(NAME_COST_REQUEST);
    let answer2 = prompt(VALUE_COST_REQUEST);

    if (answer1.length == 0 || answer2.length == 0) {
        console.log(ERROR_MESSAGE);
        break;
    } else {
        appData.expenses[answer1] = answer2;
    }
}

function calculateMoneyPerDay(money) {
    return (money / 30).toFixed(1);
}