FROM node:16.16.0-alpine3.16
WORKDIR /app
COPY . .
CMD node ./server.js
