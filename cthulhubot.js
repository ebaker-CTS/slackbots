'use strict'

var SlackBot = require('slackbots');
var fs, configurationFile;

configurationFile = 'cthulhuinfo.json';
fs = require('fs');

var config = JSON.parse(fs.readFileSync(configurationFile));

var bot = new SlackBot({
  name: config.name,
  token: config.token
});

var params = {
  icon_emoji: ':cthulhu:'
};

bot.on('start', function(){
  bot.postMessage(config.devchannel,
    'Ph\'nglui mglw\'nafh',
    params);
});

bot.on('message', function(message){
  if(message.text == 'cthulhu'){
    
  }
});