const net = require('net');

const socket = net.connect({port: 3000}, () => {
  console.log('Connected to Python script');
});

socket.on('data', (data) => {
  console.log(`Received data from Python script: ${data}`);
});

function moveLeft() {
  socket.write('left\n');
}

function moveRight() {
  socket.write('right\n');
}

function moveForward() {
  socket.write('forward\n');
}

function moveReverse() {
  socket.write('reverse\n');
}

