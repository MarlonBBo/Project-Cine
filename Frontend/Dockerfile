
FROM node:20.12.0-alpine AS builder

WORKDIR /Frontend

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

FROM nginx:alpine

COPY --from=builder /Frontend/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf




