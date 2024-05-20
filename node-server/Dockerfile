FROM node:20.13.1-alpine3.18

WORKDIR /home/node-server

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "./index.js"]