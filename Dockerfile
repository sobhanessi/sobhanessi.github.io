# I have to rearrange and manage this file.
FROM node:20.5.1-alpine3.17
WORKDIR /usr/src/app
COPY package*.json .
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn","run","dev"]