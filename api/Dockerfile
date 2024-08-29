FROM node:latest

WORKDIR /api

COPY . .

RUN rm -rf node_modules
RUN npm i 
RUN npx prisma generate

CMD ["npm","run", "start"]

EXPOSE 3000
