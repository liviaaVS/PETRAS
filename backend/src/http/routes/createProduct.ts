import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../services/prisma";

export async function createProduct(app: FastifyInstance) {
    app.post("/product/", {
        schema: { // Configuração do Swagger
            description: "Cria um novo Produto",
            tags: ["Produtos"], // Categoria no Swagger
            body: {
                type: "object",
                required: ["title", "description"],
                properties: {
                    title: { type: "string", description: "Título do produto" },
                    description: { type: "string", description: "Descrição do produto" }
                }
            },
            response: {
                201: {
                    description: "Produto criado com sucesso",
                    type: "object",
                    properties: {
                        productID: { type: "string", description: "ID do produto criado" }
                    }
                }
            }
        }
    }, async (request, reply) => {
        // Validação do corpo da requisição
        const createProductBody = z.object({
            title: z.string(),
            description: z.string(),
        });

        // Extração e validação dos dados
        const { title, description } = createProductBody.parse(request.body);
        
        // Criação do produto no banco de dados
        const produto = await prisma.produto.create({
            data: { 
                title, 
                description 
            },
        });
        console.log(produto);

        // Retorno da resposta
        return reply.status(201).send({ productID: produto.id });
})}
