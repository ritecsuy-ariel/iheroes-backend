FROM node:alpine as builder

WORKDIR /usr/iheroes

COPY package.json .

RUN npm install && npm install typescript -g

COPY . .

RUN tsc

FROM node:lts-slim

WORKDIR /usr/iheroes

COPY package.json .

RUN npm install --omit=dev

COPY --from=builder /usr/iheroes/build ./build

COPY .env .env.test vite.config.mjs secret.key ./

COPY config ./config

COPY migrations ./migrations

COPY seeders ./seeders

COPY src ./src

COPY test ./test

EXPOSE 3333

CMD ["node", "./build/server.js"]
