var _ = require('lodash');

module.exports = {
	onMessage: onMessage
};

var order = [];
var total = 0;
var valueAdded = 0;
var discount = 10;
//TODO: парсить пиццы и пиццы недели

//temporary constructor
function pizza (name, priceS, priceM, priceL) {
	this.name = name;
	this.priceS = priceS;
	this.priceM = priceM;
	this.priceL = priceL;
}

var hawaiian = new pizza('Гавайская', 60, 100, 165);
var neapolitan = new pizza('Неаполитанская', 55, 95, 150);
var bavarian = new pizza('Баварская', 70, 120, 195);
var pizzas = [hawaiian, neapolitan, bavarian];

function userOrder (user, orderedPizza, price) {
	this.user = user;
	this.pizza =h
}


function onMessage (message) {
	if (message.text === '!заказ') {
		return onStart();
	} else if (_.startsWith(message.text, '!хочу')) {
		return onPizza(message);
	} else if (message.text === '!статус') {
		return onStatus();
	} else if (message.text === '!всё' || message.text === '!все') {
		return onEnd();
	//TODO: если написали в личку боту, рандом отвечать
	}
}

function onStart() {
	return 'Начинаю собирать заказы.\nЧтобы совершить заказ, напишите `!хочу баварскую S`.\nЧтобы показать текущий заказ, напишите `!статус`.\nЧтобы закончить заказ, напишите `!всё`.';
}

function onPizza (message) {
	//TODO: игнорировать первый и два последних символа в названии пиццы ('Гавайская' vs 'гавайскую')
	//TODO: PM принято с указанием цены со скидкой; Отвечать, если не знает такой пиццы или размер

	var splittedMessage = message.text.split(' ');

	for (i = 0; i < pizzas.length; i++) {
		if (splittedMessage[1] === pizzas[i].name) {
			if (splittedMessage[2] = 'S' || 's') {
				return 'Вы заказали *' + pizzas[i].name + '* стоимостью *' + pizzas[i].priceS + '* грн.'; //TODO
			}
			else if (splittedMessage[2] = 'M' || 'm') {
				return 'Вы заказали *' + pizzas[i].name + '* стоимостью *' + pizzas[i].priceM + '* грн.'; //TODO
			}
			else if (splittedMessage[2] = 'L' || 'l') {
				return 'Вы заказали *' + pizzas[i].name + '* стоимостью *' + pizzas[i].priceL + '* грн.'; //TODO
			}
		}
	}

	//TODO: учитывать обе скидки
	total += valueAdded; //TODO
}

function onStatus() {
	return 'вася заказал баварскую S, а петя гавайскую M'; //TODO
}

function onEnd() {
	return 'Учитываю скидку 10% на всё меню. 20% скидку на пиццу недели пока не умею.\n ПОДСЧЁТ';	//TODO
	//TODO: обнулять total и valueAdded в конце
}


/*TODO:
- 4+1 пицца либо делится на всех либо на одного человека (если 4, 5, 6 человек..)
- если 2 пиццы, то выбираем напиток.
- метод доставать имя пользователя по его slackID
 */