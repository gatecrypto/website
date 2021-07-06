FROM node:14.15.4-alpine

ENV NODE_ENV="production"

WORKDIR /app

COPY . /app

RUN yarn

RUN yarn build

CMD ["yarn", "start"]