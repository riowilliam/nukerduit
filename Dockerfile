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
