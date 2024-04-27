<p align="center">
  <img src="https://github.com/KRochaS/api-rest-nodejs/blob/master/.github/logo.svg" width="490" >
</p>

<p align="center">	
   <img src="https://img.shields.io/badge/-Fastify-A9C195?style=flat&logoColor=white" />

  <img src="https://img.shields.io/badge/-Knex-A9C195?style=flat&logoColor=white" />
  
  <img src="https://img.shields.io/badge/-Typescript-A9C195?style=flat&logoColor=white" />
</p>

## :bar_chart: About
Project developed in the Node.js specialization bootcamp at Rocketseat, where the objective was to create a financial transactions application


## :books: Technologies e libs                                                                
- [NodeJS](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [Knex](https://knexjs.org/)

  ## :computer: Routes

 <img src="https://github.com/KRochaS/api-rest-nodejs/blob/master/.github/screenshot-01.png" width="986" >
 
#### POST `/transactions`

 [![Run in Hoppscotch](https://hopp.sh/badge-dark.svg)](https://hopp.sh/r/oPQmgXoLwCQQ)

Create a new transaction.


#### Request body

```json
{
  "title": "Freelancer",
  "amount": 9000,
  "type": "credit"
}
```
#### GET `/transactions`
[![Run in Hoppscotch](https://hopp.sh/badge-dark.svg)](https://hopp.sh/r/mZZpgC9RmirB)

Return an array of transactions.

#### Response body

```json
{
  "transactions": [
    {
      "id": "4e563c29-6b32-444f-95a8-82e546ad6b66",
      "title": "Freelancer",
      "amount": 9000,
      "created_at": "2024-04-27 20:51:57",
      "session_id": "7df05094-755f-48d2-86c0-46169d511a5b"
    }
  ]
}
```

#### GET `/transactions/:transactionId`
[![Run in Hoppscotch](https://hopp.sh/badge-dark.svg)](https://hopp.sh/r/bQ01KYMb3wPw)

Return data from a single transaction.

#### Response body

```json
{
  "transaction": {
    "id": "4e563c29-6b32-444f-95a8-82e546ad6b66",
    "title": "Freelancer",
    "amount": 9000,
    "created_at": "2024-04-27 20:51:57",
    "session_id": "7df05094-755f-48d2-86c0-46169d511a5b"
  }
}
}
```

#### GET `transactions/summary`
[![Run in Hoppscotch](https://hopp.sh/badge-dark.svg)](https://hopp.sh/r/vgloSLIlmc1E)

Return sumary from transaction.

#### Response body

```json
{
  "summary": {
    "amount": 9000
  }
}
```

## :pencil: How to run the project

```bash

#  Clone this repository.
$ git clone https://github.com/KRochaS/api-rest-nodejs.git

# Navigate to the project folder in the terminal/cmd.
$ cd api-rest-nodejs/

# Install the dependencies.
$ npm i ou yarn install

# Copy .env.example to .env file

# run the project
$ npm run dev

# HTTP server running on http://localhost:3333
```
