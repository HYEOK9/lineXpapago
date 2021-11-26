const request = require('request');
const TARGET_URL = 'https://api.line.me/v2/bot/message/push'
const MULTI_TARGET_URL = 'https://api.line.me/v2/bot/message/multicast'
const BROAD_TARGET_URL = 'https://api.line.me/v2/bot/message/broadcast'
const TOKEN = 'fjYBTB9yOBDkEK6Xw6Wc/t7MMeJJdEtKwdwyK4rwZcRICGLxcQj8z8wmUKB/IXgoRs3FiCw+BW5n9TBKzz8lqozp1RJnskI2FB/Y1lIdKDPKl6zXAgZAeymgnTibTYSWi13cLB8UJphPfPTdWKPM7wdB04t89/1O/w1cDnyilFU='
const USER_ID = 'Ue52cd9c9a07b4c87051dac25b231e338'

request.post(
    {
        url: TARGET_URL,
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        },
        json: {
            "to": `${USER_ID}`,
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


// Multicast User
// request.post(
//     {
//         url: MULTI_TARGET_URL,
//         headers: {
//             'Authorization': `Bearer ${TOKEN}`
//         },
//         json: {
//             "to": [`${USER_ID}`],
//             "messages":[
//                 {
//                     "type":"text",
//                     "text":"Hello, user"
//                 },
//                 {
//                     "type":"text",
//                     "text":"May I help you?"
//                 }
//             ]
//         }
//     },(error, response, body) => {
//         console.log(body)
//     });


// Broadcast
    request.post(
        {
            url: BROAD_TARGET_URL,
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            },
            json: {
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