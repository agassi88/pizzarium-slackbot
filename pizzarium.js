var _ = require('lodash');

module.exports = {
	onMessage: onMessage
};

// заказ!
// хочу название пиццы 1 (заказчик - отправитель сообщения)
// хочу название пиццы 2 (заказчик - отправитель сообщения)
// все!

var pizzas = [];
var total = 0;
var valueAdded = 0;
var fixedDiscount = 10;
var pizzaOfTheWeekDiscount = 20;

function onMessage (message) {
	if (message.text === '!заказ') {
		onStart(message);
	} else if (_.startsWith(message.text, '!хочу')) {
		onPizza(message);
	} else if (message.text === '!все') {
		onEnd(message);
	}
}

function onStart (message) {
	chat.sendMessage(testchannel-pizzarium, 'Начинаю заказ. Учитываю скидку 10% на всё меню и 20% на пиццу недели');
	//TODO: парсить пиццу недели, вывод по команде  getPizzaOfTheWeek
}

function onPizza (message) {
	
	total += valueAdded;
}

function onEnd (message) {
}



/* TODO:
 - вводить размер, стоимость?
 - кейсы, которые нужно реализовать позднее:
 - парсить скидку 20%
 - 4+1: если 4 человека, то. если 5 человек, то. если 6, то.
 - если 2 пиццы, то выбираем напиток.
 - пополам если два человека заказывают
 getPizzasPrice
 getPizzaOfTheWeek
 */