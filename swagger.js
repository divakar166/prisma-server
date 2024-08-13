const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Prisma Server',
      version: '1.0.0',
      description: 'API Documentation for our Prisma Node.js application',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./swaggerDefinition.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
