FROM node:latest

WORKDIR /api

# Copia todos os arquivos da aplicação para o diretório de trabalho
COPY . .

RUN rm -rf node_modules
RUN npm install
RUN npx prisma generate

RUN echo '#!/bin/sh \n\
npx prisma migrate deploy \n\
npm start' > /start.sh && chmod +x /start.sh

ENTRYPOINT ["/start.sh"]


EXPOSE 3000