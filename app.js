var slackbot = require('node-slackbot');
var pizzarium = require('./pizzarium');

var bot = new slackbot('xoxb-15398295058-sLaSb149HzZclsxV2JIv4REW');

bot.use(function (message, cb) {
	if ('message' == message.type) {
		var result = pizzarium.onMessage(message);
		if (result) {
			bot.sendMessage(message.channel, result); //TODO явно указать канал, потому что могут писать в личку
		}
	}
	cb();
});
bot.connect();