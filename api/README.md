# Langsung Jalan Main Back End API

## Dependencies
1. MySQL
2. REDIS
3. Referral Service (microservice)
4. Adonis-cli
5. PM2

## Setup

1. run `npm i`
2. copy the .env file
3. run `adonis migration:run` 
4. run `adonis db:seed`
5. run `pm2 start server.js --name=api`
