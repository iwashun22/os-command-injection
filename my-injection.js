'use strict';
const http = require('http');
const cp = require('child_process');
const qs = require('querystring');
const server = http.createServer((req, res) => {
   const path = req.url;
   const querystring = path.split('?')[1];
   // console.log(querystring);
   const { name, password } = qs.parse(querystring);
   res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
   });
   if(name && password)
      res.end(cp.execSync('echo ' + path + `; echo "name: ${name}\npassword: ${password}" > user_info.txt`));
   else {
      res.end('/')
   }
});

const port = 8000;
server.listen(port, () => {
   console.info('Listening on ' + port);
})