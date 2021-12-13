FROM node:16-alpine
WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json .
COPY package-lock.json .

RUN npm install --production --silent

COPY . .

CMD ["npm", "start"]
