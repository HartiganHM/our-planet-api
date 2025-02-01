import { FastifyInstance } from 'fastify';

const app = async (server: FastifyInstance) => {
  server.get('/', async (request, reply) => {
    return 'Hello World!';
  });
};

export default app;
