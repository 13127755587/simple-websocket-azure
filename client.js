const WebSocket = require('ws');

//local host
//const ws = new WebSocket('wss://localhost:5001');

//Azure, change the website host
const ws = new WebSocket('wss://<website host>');

ws.on('open', function open() {
  ws.send('client say hello');
});

ws.on('message', function incoming(data) {
  console.log(data);
});

