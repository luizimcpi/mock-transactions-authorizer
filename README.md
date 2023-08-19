# Mock Transaction Authorizer Generator

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Libraries

### Install Axios to make http requests
```
npm i --save @nestjs/axios axios
```

### Install schedule module
``` 
npm install --save @nestjs/schedule
npm install --save-dev @types/cron
```

### UUID
```
npm install --save uuid
```

## Resources

```
nest g resource transactions
```

```
Consulta: https://webhook.site/#!/e7648810-8661-47af-8b64-cff6e4b0e630
Envio: https://webhook.site/e7648810-8661-47af-8b64-cff6e4b0e630
```

## TODO 

- [Configurations read env vars](https://docs.nestjs.com/techniques/configuration)

## Docker

```bash
$ docker build -t luizimcpi/mock-transactions-authorizer .
$ docker run -p 3000:3000 luizimcpi/mock-transactions-authorizer
```
