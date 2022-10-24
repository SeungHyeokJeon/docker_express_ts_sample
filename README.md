# hs_clone

### Dev Environment

- node.js + express.js + typescript
- mariadb

### Requirement

- Docker, docker-compose

### Execution

1. install npm libraries

```
npm install express@^4.18.2 typescript@^4.8.4 eslint@^8.26.0 @types/express@^4.17.14 dotenv@^16.0.3 prettier@^2.7.1 eslint-config-prettier@^8.5.0 eslint-plugin-prettier@^4.2.1 nodemon@^2.0.20 @typescript-eslint/eslint-plugin@^5.40.1 @typescript-eslint/parser@^5.40.1 mysql@^2.18.1 @types/mysql@^2.15.21
```

2. create `/.env` file

```
PORT = [your PORT Number]

MYSQL_HOST=localhost
MYSQL_PORT=[your PORT Number]
MYSQL_ROOT_PASSWORD=[your PASSWORD]
MYSQL_DATABASE=uams
MYSQL_USER=[your USERNAME]
MYSQL_PASSWORD=[your PASSWORD]
```

3. load/build docker image

```
docker pull mariadb
docker build -t [image name] .
```

- if you set the image name to `node-test`, you must rename `image` in `docker-compose.yml`

4. `docker-compose up`
