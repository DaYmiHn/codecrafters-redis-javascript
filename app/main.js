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
  // 'connection' listener.
  console.log('client connected');
  
  socket.on('end', () => {
    console.log('client disconnected');
  });

  socket.on('data', (data) => {
    console.log(data.toString())
    socket.write('+PONG\r\n');
  });
  // socket.on('connect', (data) => {
  //   console.log(data)
  //   socket.write('+PONG\r\n');
  //   socket.pipe(socket);

  // });

  socket.on('end', (data) => {
    socket.end();
  })

  socket.pipe(socket);

  // socket.write('+PONG\r\n');
  // socket.pipe(socket);
});


server.listen(6379, '127.0.0.1');

server.on('data', (data) => {
  console.log(data)
});