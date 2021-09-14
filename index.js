const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8000 })

wss.on('connection', ws => {
    console.log('New client connected!')

    ws.on('message', data => {
        console.log('Data sent: ', `${data}`)
        
        ws.send("Acknowledged!")
    })

    ws.on('close', () => {
        console.log('Connection Closed!')
    })
})