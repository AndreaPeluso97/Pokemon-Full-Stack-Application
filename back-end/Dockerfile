FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install @nestjs/cli --global
RUN npm install --production=true

RUN apt-get -q update && apt-get -qy install netcat

COPY . .

RUN npm run build 

CMD ["sh", "-c", "npm run start:prod"]