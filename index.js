var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId:1499626788,
  channelSecret:	9e95d637a0fb0ba08eebd84274a2da18,
  channelAccessToken:yWRRwIbq7uyu0MSrYBCRAvrTSK7bf9s76GSLoOGGpng+eaDO92YK9AWjj7159ASe3oPz7zkui9PQrOqfAo7MHhYx94dREPG9QIlVwSHfa3I1rUsqhyOO9mQGdj9FU2FA8uFBFJy0Kv24hWilGS0xwwdB04t89/1O/w1cDnyilFU=});
bot.on('message', function(event) {
  console.log(event);
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});