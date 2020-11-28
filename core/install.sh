#!/bin/sh

# supervisor
service supervisor start
supervisorctl start core-queue

php artisan migrate --seed
php artisan passport:install
/usr/sbin/apache2ctl -D FOREGROUND
