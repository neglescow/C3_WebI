var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('a user has disconnected.');
    });
});

let emitir = function(){
    let num = Math.floor(Math.random() * 10 + 1);
    io.emit('#data', num);
};
let intervalo = setInterval(emitir, 3000);

http.listen(3000, function (err) {
    if (!err) {
        console.log('Servidor rodando normalmente')
    }
});