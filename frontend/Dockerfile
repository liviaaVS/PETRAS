# Etapa 1: build do frontend
FROM node:20-alpine AS build

WORKDIR /app

# Instala dependências
COPY package.json package-lock.json ./


RUN apk add --no-cache libc6-compat && \
    npm install --legacy-peer-deps


# Copia o restante do código
COPY . .

# Build do Vite (que usa as variáveis de ambiente)
RUN npm run build 

# Etapa 2: imagem final com nginx
FROM nginx:alpine

# Remove conf padrão
RUN rm /etc/nginx/conf.d/default.conf

# Adiciona a conf customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos estáticos do frontend compilado
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]