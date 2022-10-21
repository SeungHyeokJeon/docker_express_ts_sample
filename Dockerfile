FROM node:19-alpine
WORKDIR /app
COPY package*.json /app
RUN npm install
RUN npm install -g typescript
COPY . /app
CMD [ "npm", "start" ]
EXPOSE 8080