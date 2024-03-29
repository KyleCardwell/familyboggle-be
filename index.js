require('dotenv').config();

const server = require('./api/server.js')

const port = process.env.PORT || 5000;

server.use('*', (req, res) => {
    res.send('<h1>Boggle Solver Loaded</h1>')
})

server.listen(port, () => {
    console.log(`server running on port ${port}`)
})