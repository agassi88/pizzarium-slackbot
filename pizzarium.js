var _ = require('lodash');

module.exports = {
	onMessage: onMessage
};

// заказ
// хочу название пиццы 1 (заказчик - отправитель сообщения)
// хочу название пиццы 2 (заказчик - отправитель сообщения)
// все!

var pizzas = [];

function onMessage (message) {
	if (message.text === 'заказ') {
		onStart(message);
	} else if (_.startsWith(message.text, 'хочу')) {
		onPizza(message);
	} else if (message.text === 'все!') {
		onEnd(message);
	}
}

function onStart (message) {
}

function onPizza (message) {
}

function onEnd (message) {
}
