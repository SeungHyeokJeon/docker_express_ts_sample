# hs_clone

### Dev Environment

- node.js + express.js + typescript
- mariadb

### Requirement

- Docker, docker-compose

### Execution

`docker pull mariadb`

1. create `/.env` file

```
PORT = [your PORT Number]

MYSQL_HOST=localhost
MYSQL_PORT=[your PORT Number]
MYSQL_ROOT_PASSWORD=[your PASSWORD]
MYSQL_DATABASE=uams
MYSQL_USER=[your USERNAME]
MYSQL_PASSWORD=[your PASSWORD]
```

2. `docker build -t [image name] .`

- if you set the image name to `node-test`, you must rename `image` in `docker-compose.yml`

3. `docker-compose up`
