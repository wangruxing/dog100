var linebot = require('linebot');
var express = require('express');

var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId:1499626788,
  channelSecret:9e95d637a0fb0ba08eebd84274a2da18,
  channelAccessToken:B+T4+TveEEelL8j1Mg6o9xK76XmCa2XvGHcTDNsooM4L3kJI7YP3sqsOqa0xfAA+3oPz7zkui9PQrOqfAo7MHhYx94dREPG9QIlVwSHfa3JWTIubS00rEkS+uUeUo64aEOz5xHGoY3TFirjrgPqQMAdB04t89/1O/w1cDnyilFU=;
var timer;
var pm = [];
_getJSON();

_bot();
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);


var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});

function _bot() {
  bot.on('message', function(event) {
    if (event.message.type == 'text') {
      var msg = event.message.text;
      var replyMsg = '';
      if (msg.indexOf('PM2.5') != -1) {
        pm.forEach(function(e, i) {
          if (msg.indexOf(e[0]) != -1) {
            replyMsg = e[0] + '的 PM2.5 數值為 ' + e[1];
          }
        });
        if (replyMsg == '') {
          replyMsg = '請輸入正確的地點';
        }
      }
      if (replyMsg == '') {
        replyMsg = '不知道「'+msg+'」是什麼意思 :p';
      }

      event.reply(replyMsg).then(function(data) {
        console.log(replyMsg);
      }).catch(function(error) {
        console.log('error');
      });
    }
  });

}

function _getJSON() {
  clearTimeout(timer);
  getJSON('http://opendata2.epa.gov.tw/AQX.json', function(error, response) {
    response.forEach(function(e, i) {
      pm[i] = [];
      pm[i][0] = e.SiteName;
      pm[i][1] = e['PM2.5'] * 1;
      pm[i][2] = e.PM10 * 1;
    });
  });
  timer = setInterval(_getJSON, 1800000);
}
