import { FastifyInstance } from "fastify";
import { prisma } from "../services/prisma";
import z from "zod";

export async function getProduct(app: FastifyInstance) {
    app.get("/product/", {
        schema: {
            description: "Retorna todos os produtos cadastrados",
            tags: ["Produtos"],
            response: {
                200: {
                    description: "Lista de produtos",
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: { type: "number", },
                            title: { type: "string" },
                            description: { type: "string" }
                        }
                    }
                }
            }
        }
    }, async (request, reply) => {
        const produto = await prisma.produto.findMany();
        return reply.status(200).send(produto);
    });

    app.get("/products/:productId", {
        // o schema é para a documentação do swagger
        schema: {
            description: "Retorna um produto pelo ID",
            tags: ["Produtos"],
            params: {
                type: "object",
                properties: {
                    productId: { type: "number", description: "ID do produto" }
                },
                required: ["productId"]
            },
            response: {
                200: {
                    description: "Detalhes do produto",
                    type: "object",
                    properties: {
                        id: { type: "number" },
                        title: { type: "string" },
                        author: { type: "string" },
                        description: { type: "string" }
                    }
                },
                404: {
                    description: "Produto não encontrado",
                    type: "object",
                    properties: {
                        message: { type: "string" }
                    }
                }
            }
        } //aqui começa a criação do endpoint
    }, async (request, reply) => {
        const getProductParams = z.object({
            productId: z.string().uuid(),
        });

        const { productId } = getProductParams.parse(request.params);

        const product = await prisma.produto.findUnique({
            where: { id: productId }
        });

        if (!product) {
            return reply.status(404).send({ message: "Produto não existe" });
        }

        return reply.status(200).send(product);
    });
}
