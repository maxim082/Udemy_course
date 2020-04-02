'use strict'

let appData = {
    strings: {
        BUDJET_REQUEST: 'Ваш бюджет на месяц?',
        DATE_REQUEST: 'Введите дату в формате yyyy-mm-dd',
        COUNT_COSTS_REQUEST: 'Сколько у вас обязательных статей расходов?',
        NAME_COST_REQUEST: 'Введите обязательную статью расходов в этом месяце',
        VALUE_COST_REQUEST: 'Во сколько обойдется?',
        ERROR_MESSAGE: 'Ошибка ввода данных',
        INCOME_REQUEST: 'Перечислите ваши источники дохода через запятую',
        BUDJET_MESSAGE: 'Бюджет пользователя на 1 день',
        INCOME_MESSAGE: 'Пути дохода пользователя:'
    },
    money: 0,
    time: new Date(),
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

    takeMoney: function () {
        appData.money = +prompt(appData.strings.BUDJET_REQUEST);
        appData.time = new Date(prompt(appData.strings.DATE_REQUEST));
    },

    calculateMoneyPerDay: function () {
        appData.moneyPerDay = (appData.money / 30).toFixed(1);
        alert(`${appData.strings.BUDJET_MESSAGE} ${appData.moneyPerDay}`);
    },

    calculateExpences: function () {
        let count = +prompt(appData.strings.COUNT_COSTS_REQUEST);

        for (let a = 0; a < count; a++) {
            let answer1 = prompt(appData.strings.NAME_COST_REQUEST);
            let answer2 = prompt(appData.strings.VALUE_COST_REQUEST);

            if (answer1.length == 0 || answer2.length == 0) {
                console.log(appData.strings.ERROR_MESSAGE);
                break;
            } else {
                appData.expenses[answer1] = answer2;
            }
        }
    },

    takeIncome: function () {
        let income = prompt(appData.strings.INCOME_REQUEST);
        appData.income = income.split(', ');
        appData.income.sort();

        alert(`${appData.strings.INCOME_MESSAGE} ${appData.income}`);
    }
};

appData.takeMoney();
appData.calculateMoneyPerDay();
appData.calculateExpences();
appData.takeIncome();

console.log(appData);

// examples from lessons
let a = 1;