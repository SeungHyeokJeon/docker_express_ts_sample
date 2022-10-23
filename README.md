# hs_clone

### Dev Environment

- node.js + express.js + typescript
- mariadb

### Requirement

- Docker, docker-compose

### Execution

1. install npm libraries

```
npm install express typescript  eslint @types/express dotenv prettier eslint-config-prettier eslint-plugin-prettier nodemon @typescript-eslint/eslint-plugin @typescript-eslint/parser
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
