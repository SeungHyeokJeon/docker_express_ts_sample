# hs_clone

### Dev Environment

- node.js 19

### Requirement

- Docker, docker-compose

### Execution

1. create `/.env` file

```
PORT = [your PORT Number]
```

2. `docker build -t [image name] .`

- if you set the image name to `node-test`, you must rename `image` in `docker-compose.yml`

3. `docker-compose up`
