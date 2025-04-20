# VueServer
FROM debian

RUN apt-get update && apt install -y nodejs npm
RUN npm install -g vue-template-compiler
RUN npm install -g vue @vue/cli @vue/cli-service

COPY ./Resume/app /app

WORKDIR /app
CMD [ "npm", "run", "serve" ]
