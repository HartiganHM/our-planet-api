import { FastifyInstance } from 'fastify';

const continents = async (server: FastifyInstance) => {
  server.get('/', async (request, reply) => {
    return 'Continents';
  });
};

export default continents;