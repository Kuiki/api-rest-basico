require('dotenv').config();
// import Server from './models/server';
const Server = require('./models/server');
// console.log(Server);
const server = new Server();

server.listen();