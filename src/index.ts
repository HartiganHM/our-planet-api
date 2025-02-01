import fastify from 'fastify';
import path from 'path';
const autoload = require('@fastify/autoload');

const server = fastify();

server.register(autoload, {
  dir: path.join(__dirname, 'routes'),
  options: { prefix: 'api' },
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
