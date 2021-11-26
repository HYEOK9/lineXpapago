const express = require('express');
const fs = require('fs');
const path = require('path');
const HTTPS = require('https');

const app = express();
// 본인이 소유한 도메인으로 변경해야 함
// www 붙여야 함
const domain = "2018102219.osschatbot.cf"
const sslport = 23023;

app.get('/', function (req, res) {
	  res.send('Hello World');
})

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
  console.log('[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다.');
  console.log(error);
}

