const express = require('express');
const server = express();
const PORT = 80;

server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(PORT, () => console.log(`Sever running on ${PORT}`));

//server.get('/', (req, res) => res.status(200).send('hello world'));