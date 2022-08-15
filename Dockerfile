FROM node:16.16.0-alpine3.16
WORKDIR /app
COPY . .
EXPOSE 3000
CMD yarn run dev
