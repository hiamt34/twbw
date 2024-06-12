#!/bin/sh

npm i

npx prisma migrate deploy

npx prisma generate

npm run build

pm2 restart