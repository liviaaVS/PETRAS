import fastify from "fastify";
import { createProduct } from "./routes/createProduct";
import { getProduct } from "./routes/getProduct";

import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

const app = fastify();

// Configuração do Swagger
app.register(swagger, {
    swagger: {
      info: {
        title: 'API Fastify',
        description: 'Documentação da API usando Swagger',
        version: '1.0.0',
      }
    }
});
  
app.register(swaggerUi, {
    routePrefix: '/docs', // URL da documentação
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    staticCSP: true,
    transformSpecificationClone: true,
  });

app.get("/",  () => {
    return "servidor ok";
})

app.register(createProduct)
app.register(getProduct);

app.listen({ port: 8080, host: "0.0.0.0" }).then((address) => {
  console.log(`Server is running at ${address}`);
});