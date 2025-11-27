require("dotenv").config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE_DEV,
  DB_DATABASE_TEST,
  DB_DATABASE_PROD,
  DB_HOST,
  DB_DIALECT,
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE_DEV,
    host: DB_HOST,
    dialect: DB_DIALECT,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE_TEST,
    host: DB_HOST,
    dialect: DB_DIALECT,
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE_PROD,
    host: DB_HOST,
    dialect: DB_DIALECT,
  },
};
