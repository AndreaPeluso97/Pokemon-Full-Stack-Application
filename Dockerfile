FROM node:14 as production 

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production=false

COPY . . 

RUN npm run build

CMD ["node", "server.js"]