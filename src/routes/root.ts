import { FastifyInstance } from 'fastify';

const app = async (server: FastifyInstance) => {
  server.register(import('./continents/index'));

  server.get('/ping', async (request, reply) => {
    return 'pong\n';
  });
};

export default app;
