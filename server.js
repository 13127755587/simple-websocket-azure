var server = require('ws').Server;
var p = process.env.PORT || 5001; //process.env.PORT is for Azure, 5001 is for localhost
var s = new server({ port: p });

s.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });
    ws.send('server say hello');
  });