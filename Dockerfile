FROM node:19.4.0-alpine3.17

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

RUN apk update && apk upgrade
RUN apk add git

#RUN npx nuxi init .

COPY . /usr/src/nuxt-app/
RUN yarn install
RUN yarn run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "dev", "-o" ]
