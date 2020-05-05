FROM node:12-alpine

WORKDIR . /api

COPY package*.json ./

RUN npm install

COPY . .

# MIGRATE
RUN node --harmony_proxies ace migration:run --force
RUN node --harmony_proxies ace db:seed --force

EXPOSE 4444

CMD [ "npm", "start" ]
