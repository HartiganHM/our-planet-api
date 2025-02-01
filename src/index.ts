import fastify from 'fastify';

const server = fastify();

server.register(import('./routes/root'));

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
