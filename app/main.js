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
  socket.on('data', (data) => {

    // console.log(`messdfsdfsdfage - `, data.toString())
    const arr = data.toString().split('\r\n');
    console.log(arr)

    const message = data.toString().replace(/[\n|\t]/gmi, '').trim()
    if(arr.includes('ping')){
      socket.write('+PONG\r\n');
    } else if(arr.includes('echo')){
      socket.write(`+${arr[4]}\r\n`);
    } else if(arr.includes('set')){
      socket.write(`+${arr[4]}\r\n`);
    }
  });

});


server.listen(6379, '127.0.0.1');
