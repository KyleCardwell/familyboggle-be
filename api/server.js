const express = require('express');

const server = express();

const BoggleLettersRouter = require('./boggleLetters/boggleLettersRouter')

server.use(express.json());

server.use('/api/boggleLetters', BoggleLettersRouter);

module.exports = server;