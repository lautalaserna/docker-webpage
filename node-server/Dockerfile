FROM node:20.13.1-alpine3.18

RUN mkdir -p /home/node-server

#WORKDIR /home/node-server

COPY . /home/node-server

EXPOSE 3000

CMD ["node", "/home/node-server/index.js"]