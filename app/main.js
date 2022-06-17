const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
// const server = net.createServer(socket => {
//   socket.pipe(socket);
//   socket.on('data', (data) => {
//     console.log(data)
//     socket.end('+PONG\r\n');
//   });
// });

const chache = {};

const server = net.createServer(socket => {
  console.log('client connected');
  // socket.pipe(socket);
  socket.on('data', (mes) => {

    // console.log(`messdfsdfsdfage - `, data.toString())
    const arr = mes.toString().split('\r\n');
    const data = arr.filter(el => el[0] !== '*' && el[0] !== '$' && !!el);
    console.log(data)

    const message = data.toString().replace(/[\n|\t]/gmi, '').trim()
    if(data.includes('ping')){
      socket.write('+PONG\r\n');
    } else if(data.includes('echo')){
      socket.write(`+${data[1]}\r\n`);
    } else if(data.includes('set')){
      chache[data[1]] = data[2];
      socket.write(`+OK\r\n`);
    }
  });

});


server.listen(6379, '127.0.0.1');
