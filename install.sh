#!/bin/sh
[ !  -d "vendor" ] && composer install
[ !  -d "vendor" ] && chown -R www-data:www-data /var/www/html
# php artisan migrate:fresh --seed
/usr/sbin/apache2ctl -D FOREGROUND
