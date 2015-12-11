var _ = require('lodash');

module.exports = {
	onMessage: onMessage
};

var pizzas = [];
var total = 0;
var valueAdded = 0;
var discount = 10;

function pizza (name, priceS, priceM, priceL) {
	this.name = name;
	this.priceS = priceS;
	this.priceM = priceM;
	this.priceL = priceL;
	}
}

var hawaiian = new pizza('Гавайская', 60, 100, 165);
var neapolitan = new pizza('Неаполитанская', 55, 95, 150);
var bavarian = new pizza('Баварская', 70, 120, 195);



function onMessage (message) {
	if (message.text === '!заказ') {
		return onStart(message);
	} else if (_.startsWith(message.text, '!хочу')) {
		return onPizza(message);
	} else if (message.text === '!всё') {
		return onEnd(message);
	}
}

function onStart (message) {
	return 'Начинаю собирать заказы.\nЧтобы совершить заказ, напишите \t!хочу баварскую S, M или L\nЧтобы закончить заказ, напишите \t!всё';
}

function onPizza (message) {
	//TODO: парсить пиццу недели
	return 'pepyaka';
	total += valueAdded;
}

function onEnd (message) {
	return 'testchannel-pizzarium', 'Учитываю скидку 10% на всё меню. 20% скидку на пиццу недели пока не умею.\n ПОДСЧЁТ';	//TODO
}



/* TODO:
 - 4+1: если 4 человека, то. если 5 человек, то. если 6, то.
 - если 2 пиццы, то выбираем напиток.
 - пополам если два человека заказывают
 getPizzasPrice
 getPizzaOfTheWeek
 db with pizzas
 */