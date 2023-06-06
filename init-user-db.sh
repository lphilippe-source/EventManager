#!/bin/bash
set -e

#psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
psql -v ON_ERROR_STOP=1 --username "username" --dbname "event" <<-EOSQL
    CREATE USER username;
    CREATE DATABASE event;
    GRANT ALL PRIVILEGES ON DATABASE username TO event;
EOSQL
