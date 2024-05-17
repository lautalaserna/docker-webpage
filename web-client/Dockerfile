FROM node:20.13.1-alpine3.18

RUN mkdir -p /home/web-client

#WORKDIR /home/web-client

COPY package*.json /home/web-client

RUN npm install

COPY . /home/web-client

EXPOSE 5173

CMD ["npm", "start"]