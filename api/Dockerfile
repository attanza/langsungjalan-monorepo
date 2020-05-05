FROM node:12-alpine

WORKDIR . /api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4444

CMD [ "npm", "start" ]
