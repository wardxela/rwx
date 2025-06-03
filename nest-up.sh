#!/bin/sh

npm run migrate:deploy
npm run seed:prod
npm run start:nestjs
