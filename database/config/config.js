/* eslint-disable import/first */
require('dotenv').config();

module.exports =   {
  "development": {
    "username": process.env.AWS_RDS_USERNAME ,
    "password": process.env.AWS_RDS_PASSWORD  ,
    "database": process.env.AWS_RDS_DATABASE_NAME,
    "host": process.env.AWS_RDS_HOST,
    "dialect": 'mysql'
  }
}

