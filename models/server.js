const express = require('express');
const cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';

    // Middelwares
    this.middelwares();

    // Routes
    this.routes();
  }

  middelwares() {
    // Cors
    this.app.use( cors() );

    // Lectura y parseo del body
    this.app.use( express.json() );

    // Public directory
    this.app.use( express.static('public') );
  }

  routes() {
    this.app.use(this.usersPath, require('../routers/user.route'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto ' + this.port);
    });
  }

}

module.exports = Server;
