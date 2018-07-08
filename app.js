// Reference bot framework

var skype = require('botbuilder');
//Reference the Express Package

var express = require('express');
var app = express();
var listeningport = process.env.PORT || 3000;

//Connect to the Bot Service

var botservice =  new skype .ChatConnector({
    appID: '678e6bca-145a-472d-b71b-e7e25d99583a',
    appPassword: 'fhoNPHBL06(^*rirxSQ862='
});

//Create a reference to our BOT service
var bot = new skype.UniversalBot(botservice);


//Wire up the bot service to our Webservices, to ensure message is posted
app.post('/Skype/msg', botservice.listen());

bot.dialog('/',function (session) {
    var skypemsg = session.message.text.toLocaleLowerCase();
    if (skypemsg === 'hi' || skypemsg === 'hello' || skypemsg === 'hey' || skypemsg === 'howzit'){
        session.send('Howzit! SSSC Bot at your service, i can only discuss booking spaces at the moment');
    }
    else
    {
        session.send('Jammer bru, please repeat that');
    }
});

app.get('/',function (req, res) {
    res.send('SSSC Skype Bot');

})

app.listen(listeningport, function(){
    console.log('SSSC BOT Listening at ' + listeningport);
})