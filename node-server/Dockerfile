FROM node:20.13.1-alpine3.18

#RUN mkdir -p /home/node-server

WORKDIR /home/node-server

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "./index.js"]