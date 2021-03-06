var express = require('express');
const request = require('request');
const TARGET_URL = 'https://api.line.me/v2/bot/message/reply'
const TOKEN = 'fjYBTB9yOBDkEK6Xw6Wc/t7MMeJJdEtKwdwyK4rwZcRICGLxcQj8z8wmUKB/IXgoRs3FiCw+BW5n9TBKzz8lqozp1RJnskI2FB/Y1lIdKDPKl6zXAgZAeymgnTibTYSWi13cLB8UJphPfPTdWKPM7wdB04t89/1O/w1cDnyilFU='
const fs = require('fs');
const path = require('path');
const HTTPS = require('https');
const domain = "2018102219.osschatbot.cf"
const sslport = 23023;

const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.post('/hook', function (req, res) {

    var eventObj = req.body.events[0];
    var source = eventObj.source;
    var message = eventObj.message;

    // request log
    console.log('======================', new Date() ,'======================');
    console.log('[request]', req.body);
    console.log('[request source] ', eventObj.source);
    console.log('[request message]', eventObj.message);

    request.post(
        {
            url: TARGET_URL,
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            },
            json: {
                "replyToken":eventObj.replyToken,
                "messages":[
                    {
                        "type":"text",
                        "text":"Hello, user"
                    },
                    {
                        "type":"text",
                        "text":"May I help you?"
                    }
                ]
            }
        },(error, response, body) => {
            console.log(body)
        });
    

    res.sendStatus(200);
});

try {
    const option = {
      ca: fs.readFileSync('/etc/letsencrypt/live/' + domain +'/fullchain.pem'),
      key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/' + domain +'/privkey.pem'), 'utf8').toString(),
      cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/' + domain +'/cert.pem'), 'utf8').toString(),
    };
  
    HTTPS.createServer(option, app).listen(sslport, () => {
      console.log(`[HTTPS] Server is started on port ${sslport}`);
    });
  } catch (error) {
    console.log('[HTTPS] HTTPS ????????? ?????????????????????. HTTPS ????????? ???????????? ????????????.');
    console.log(error);
  }
  
