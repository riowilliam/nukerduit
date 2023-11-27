<<<<<<< HEAD
FROM node:14.17.3-alpine as node

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
=======
FROM php:8.1.25-cli

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
    libpq-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_pgsql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY composer.json composer.lock /var/www/html/

RUN composer install --no-scripts --no-autoloader --no-dev

COPY . .

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

RUN composer dump-autoload --optimize --classmap-authoritative

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=8000
>>>>>>> r1remote/main
