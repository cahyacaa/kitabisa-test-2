'use strict'
const fastify = require('fastify');
const routes = require('./routes');

function build(opts = {}) {
  const app = fastify(opts);
  // Declare a route
  app.get('/api', async (_request, reply) => {
    return reply.send({
      msg: "OK",
      success: true
    })
  })

  routes.forEach(route => {
    app.route(route);
  })

  return app;
}

module.exports = build;