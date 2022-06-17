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


const server = net.createServer(socket => {
  console.log('client connected');

  socket.on('data', (data) => {
    console.log(`message - ${data.toString()}`)
    if(data.toString() == 'ping'){
      socket.write('+PONG\r\n');
    } else if(data.toString().includes('echo')){
      socket.write('+hey\r\n');
    }
  });

});


server.listen(6379, '127.0.0.1');

server.on('data', (data) => {
  console.log(data)
});