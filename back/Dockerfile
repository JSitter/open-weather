FROM node:11-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
EXPOSE 3087
ENTRYPOINT [ "npm", "start" ]