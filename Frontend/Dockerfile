
FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18

WORKDIR /app

COPY --from=builder /app/dist /app/dist

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist", "-l", "5000"]

