const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment this block to pass the first stage
const server = net.createServer(socket => {
  socket.pipe(socket);

  socket.on('data', (data) => {
    console.log(data)
  })
});

server.listen(6379, '127.0.0.1').on('data', (data) => {
  console.log(data)
});
