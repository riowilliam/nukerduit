FROM node:18 AS node

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN mkdir -p /app/node_modules && chown -R node:node /app

USER node

RUN npm run build

CMD [ "node", "app.js" ]

FROM nginx:alpine

ARG NGINX

COPY $NGINX /etc/nginx/nginx.conf

COPY --from=node /app/dist/front-nukerduit /usr/share/nginx/html
