#!/bin/sh
[ !  -d "vendor" ] && composer install
[ !  -d "vendor" ] && chown -R www-data:www-data /var/www/html
sleep 10 # waiting on postgres container to show up
php artisan migrate --seed
/usr/sbin/apache2ctl -D FOREGROUND
