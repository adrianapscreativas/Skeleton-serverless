/* eslint-disable import/first */
require('dotenv').config();

// @todo: variables for stage and prod.
module.exports =   {
  "development": {
    "username": process.env.AWS_RDS_USERNAME || 'erp_admin',
    "password": process.env.AWS_RDS_PASSWORD || '3rp_s3rv3rl3ss' ,
    "database": process.env.AWS_RDS_DATABASE_NAME || 'erp_database',
    "host": process.env.AWS_RDS_HOST || 'saperp.ckt3grwu03hi.us-east-2.rds.amazonaws.com',
    "dialect": 'mysql'
  }
}

