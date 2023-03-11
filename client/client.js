const net = require('net')

const options = {
    port: 8008,
    host: '127.0.0.1'
}

const client = net.createConnection(options)

client.on('connect', ()=> {
    console.log('connection established')
    client.write('GASATUMADRE TILIN')
})

client.on('error', (err)=> {
    console.log(err.message)
})