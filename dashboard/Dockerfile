FROM node:12-alpine

WORKDIR . /dashboard

COPY package*.json ./

RUN npm install
RUN npm run build
COPY . .

EXPOSE 13000

CMD [ "npm", "start" ]
