FROM php:8.3-apache

# msmtp-mta provides /usr/sbin/sendmail, used by PHPMailer::isSendmail()
# when VITE_ENVIRONMENT=local. It relays every message to Mailpit.
RUN apt-get update \
    && apt-get install -y --no-install-recommends msmtp-mta unzip \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install pdo_mysql

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

RUN cp "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini" \
    && sed -i 's/Listen 80$/Listen 8080/' /etc/apache2/ports.conf \
    && sed -i 's/<VirtualHost \*:80>/<VirtualHost *:8080>/' /etc/apache2/sites-available/000-default.conf

COPY php.ini "$PHP_INI_DIR/conf.d/zz-local.ini"
COPY msmtprc /etc/msmtprc

EXPOSE 8080
