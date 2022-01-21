const routes = require('./routes/routes')
require('dotenv').config();
// Require the framework and instantiate it
const fastify = require('fastify')();

// Declare a route
fastify.get('/', async (request, reply) => {
  return reply.send({
      msg: "OK",
      success: true
  }) 
})

routes.forEach(route=>{
    fastify.route(route);
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000);
    console.log('App listening on port 3000');
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()