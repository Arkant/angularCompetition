FROM ubuntu:latest

RUN apt-get update \
  && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_11.x | bash - \
  && apt-get install -y nodejs nginx cowsay \
&& ln -s /usr/games/cowsay /usr/bin/cowsay

WORKDIR /usr/app

COPY /nginx.conf /etc/nginx/conf.d/app.conf
COPY . .

EXPOSE 80

RUN npm install
RUN npm run build

CMD cowsay "Everything is ready, my lord!" \
  && nginx -g "daemon off;"