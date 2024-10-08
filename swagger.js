import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'API Documentation',
    description: 'API Description',
  },
  host: `${process.env.GITHUB_CLIENT_ID}:5002`,
  schemes: ['http'],
};

const outputFile = './swagger_output.json';
const routes  = ['./server.js'];


swaggerAutogen()(outputFile, routes, doc);
