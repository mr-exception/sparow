FROM php:7.4-apache

# import apache global configuration
RUN rm /etc/apache2/sites-available/000-default.conf
ADD ./docker/config/000-default.conf /etc/apache2/sites-available/000-default.conf

# import apache sites
RUN rm /etc/apache2/apache2.conf
ADD ./docker/config/apache2.conf /etc/apache2/apache2.conf

# enable mods
RUN a2enmod rewrite

# import php.ini configs
RUN rm /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini-development
ADD ./docker/config/php/php.ini-production /usr/local/etc/php/php.ini-production
ADD ./docker/config/php/php.ini-development /usr/local/etc/php/php.ini-development

# restart the apache service
RUN service apache2 restart

# update repo-lists
RUN apt update

# install needed non-php packages
RUN apt install wget curl unzip -y

# install gd packages
RUN apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd

# install core pecl packages
RUN apt-get install -y  zlib1g-dev

# install postgres packages
RUN apt-get install -y libpq-dev && docker-php-ext-install pdo pdo_pgsql

# install ext and ext-zip packages
RUN apt-get install -y \
    libzip-dev \
    zip \
    && docker-php-ext-install zip

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# copy the core project into image
# ADD ./ /var/www/html/

# navigate to core project and install packages
# RUN cd /var/www/html/core/production && composer install

# set www dir permission
# RUN chown -R www-data:www-data /var/www

# send and config .env file into image
# ADD ./docker/config/.env /var/www/html/core/production/.env
# RUN cd /var/www/html/core/production && php artisan key:generate

# define db
# RUN cd /var/www/html/core/production && php artisan migrate:fresh --seed
# RUN cd /var/www/html/core/production && php artisan passport:install
