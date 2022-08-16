FROM node:16.16.0-alpine3.16
WORKDIR /usr/src/app
COPY package*.json .
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn","run","dev"]