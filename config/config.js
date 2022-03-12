require('dotenv').config();
const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  "development": {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      "ssl": {
        "require":false,
        rejectUnauthorized: false
       }
    }
  },
  "test": {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      "ssl": {
        "require":false,
        rejectUnauthorized: false
       }
    }
  },
  "production": {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      "ssl": {
        "require":false,
        rejectUnauthorized: false
       }
    }
    
  }
}
