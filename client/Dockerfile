
FROM node:10-alpine

RUN mkdir -p /home/node/client/node_modules && chown -R node:node /home/node/client

WORKDIR /home/node/client

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "start" ]
