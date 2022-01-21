'use strict'
require('dotenv').config();
const server = require('./app')();

server.listen(process.env.PORT || 3000, (err, address) => {
  console.log("Server listening on port 3000")
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
});