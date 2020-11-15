#!/bin/sh
php artisan migrate --seed
php artisan passport:install
/usr/sbin/apache2ctl -D FOREGROUND
