aggredash
=========

Fetches contribution numbers from multiple sources and aggregates them for a dashboard

MVP API found at:

* http://aggredash.herokuapp.com/api/mofo/2014
* http://aggredash.herokuapp.com/api/mofo/2014/latest

## Prerequisites:

* node
* heroku toolbelt
* mysql db

## Create tables in mysql
See script in sql/scripts.sql

## Environment Config

For local dev, copy sample.env to .env and add credentials
Set equivilent environment variables on Heroku

## Tracking Config
```
to_track.js
```

## Running the app:

```
foreman start web
```

## Clear and rebuild the database

Run this script to clear and rebuild the database

```
foreman run node reset
```