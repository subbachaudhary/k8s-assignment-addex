#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for Postgres to start..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 6
    done

    echo "Postgres started succesfully !!!"
fi
python manage.py flush --no-input
python manage.py collectstatic --no-input --clear
python manage.py migrate --noinput
gunicorn backend_drf_inquiring.wsgi:application --bind 0.0.0.0:8000
exec "$@"