#!/bin/bash
docker volume create --name=mongo_db
docker volume create --name=redis_db
docker volume create --name=mysql_db
docker volume create --name=post_db
docker volume create --name=mongo_db