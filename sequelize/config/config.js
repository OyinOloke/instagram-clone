require('dotenv/config')

const username=process.env.DB_USER;
const password=process.env.BB_PASSWORD;
const database= process.env.DB_DATABASE;
const host= process.env.DB_HOST;

module.exports={
  "development": {
    "username": username,
    "password": password,
    "database": database,
    "host": host,
    "dialect": "postgres"
  },
  "test": {
    "username": username,
    "password": password,
    "database": database,
    "host": host,
    "dialect": "postgres"
  },
  "production": {
    "username": username,
    "password": password,
    "database": database,
    "host": host,
    "dialect": "postgres"
  }
}
