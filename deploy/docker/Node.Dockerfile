# syntax=docker/dockerfile:1

FROM node:18.13.0
WORKDIR /app

COPY . .
RUN yarn install
EXPOSE 3100
CMD ["yarn", "run", "start:dev"]
