# Use uma imagem do Node.js
FROM node:16

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala todas as dependências
RUN npm install

# Copia o resto dos arquivos para o diretório de trabalho
COPY . .

# Expõe a porta 5173
EXPOSE 5173

# Comando para iniciar a aplicação
CMD [ "npm", "run", "dev" ]
