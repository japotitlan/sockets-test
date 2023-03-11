const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
    
    socket.on('data', (data) => {
        console.log(`\nClient message: ${data}`);
        socket.write('simon conectaste')
    });

    socket.on('close', () => {
        console.log(`Connection ended`);
    });

    socket.on('error', (err) => {
        console.log(`\nError message: ${err}`);
    });
});

server.listen(8008, ()=>{
    console.log(`Server listening on port ${server.address().port}`);
});