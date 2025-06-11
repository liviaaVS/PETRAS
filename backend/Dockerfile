# Etapa 1: Usar uma imagem base do Node.js
FROM node:22-alpine

# Etapa 2: Definir o diretório de trabalho dentro do container
WORKDIR /app

# Etapa 3: Copiar os arquivos de dependências (package.json e package-lock.json)
COPY package*.json ./

# Etapa 4: Instalar as dependências
RUN npm install

# Etapa 5: Copiar o restante do código da aplicação
COPY . .

# Etapa 6: Expor a porta que a API usará
EXPOSE 8080

# Etapa 7: Definir o comando para iniciar a aplicação
CMD ["npm","run", "start"]
