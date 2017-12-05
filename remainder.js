'use strict'

const TelegramBot = require ('node-telegram-bot-api');
const token = '472116417:AAE1oJPSTmaAhZ3cH1_k9LwFzkpBxDU-c';
const bot = new TelegramBot (token,{
   polling: true,
});

let notes = [];

bot.onText(/напомни (.+) в (.+)/, function (msg, match) {
  let userId = msg.from.id;
  let text = match[1];
  let time = match[2];

    notes.push( { 'uid':userId, 'time':time, 'text':text } );

    bot.sendMessage(userId, 'Чудово! Обов’язково нагадаю,що ви повинні зробити');
});

setInterval(function(){
  for (var i = 0; i < notes.length; i++){
      let curDate = new Date().getHours() + ':' + new Date().getMinutes();
          if ( notes[i]['time'] === curDate ) {
              bot.sendMessage(notes[i]['uid'], 'Нагадаю,що ви повинні: '+ notes[i]['text'] + ' зараз.');
              notes.splice(i,1);
            }
        }
},1000);
