var slackbot = require('node-slackbot');
var pizzarium = require('./pizzarium');

var bot = new slackbot('xoxb-15398295058-sLaSb149HzZclsxV2JIv4REW');

bot.use(function (message, cb) {
	if ('message' == message.type) {
		var result = pizzarium.onMessage(message);
		if (result) {
			var userSaid = message.user + ' said: ' + message.text;
			bot.sendMessage(message.channel, userSaid);
		}
	}
	cb();
});
bot.connect();