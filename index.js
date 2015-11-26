var slackbot = require('node-slackbot');
var pizzarium = require('./pizzarium');

var bot = new slackbot('xoxb-15398295058-sLaSb149HzZclsxV2JIv4REW');

bot.use(function (message, cb) {
	if ('message' == message.type) {
		pizzarium.onMessage(message);
	}
	cb();
});

bot.connect();
