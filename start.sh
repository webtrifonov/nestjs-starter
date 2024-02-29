#!/bin/bash
source ./.env

docker-compose -f ./docker-compose.yaml down
docker system prune -f --volumes
docker-compose -f ./docker-compose.yaml up -d --build
docker logs -f $BACKEND_APP_NAME"_node-api"
