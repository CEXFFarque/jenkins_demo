const express = require('express');
const server = express();
const PORT = 80;
var path = require('path');

server.get('/', function(req, res) {
    res.sendFile(path.join('index.html'));
});

server.listen(PORT, () => console.log(`Sever running on ${PORT}`));

//server.get('/', (req, res) => res.status(200).send('hello world'));