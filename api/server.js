const express = require('express');
const helmet = require('helmet')
const cors = require('cors')

const server = express();

const BoggleLettersRouter = require('./boggleLetters/boggleLettersRouter')

server.use(express.json());
server.use(helmet())
server.use(cors())

server.use('/api/boggleLetters', BoggleLettersRouter);

module.exports = server;