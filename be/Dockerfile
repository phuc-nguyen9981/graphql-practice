FROM node:14.17-alpine3.12

RUN mkdir /home/app

WORKDIR /home/app

COPY package*.json /home/app

RUN npm install

COPY . /home/app

CMD ["npm", "start"]