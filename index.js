var linebot = require('linebot');
var express = require('express');

var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: channel Id,
  channelSecret: channel Secret,
  channelAccessToken: channel Access Token
});
bot.on('message', function(event) {
  console.log(event);
});

http.createServer(app).listen(app.get('port'),
  function(){
    console.log("Express server listening on port " + app.get('port'));
});

app.set('port', process.env.PORT || 3000);

var express = require("express");
var app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(app.get('port'));

