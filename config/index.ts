// parsing from /.env

import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port: parseInt(process.env.PORT as string, 10) as number,
  DBHost: process.env.MYSQL_HOST as string,
  DBPort: parseInt(process.env.MYSQL_PORT as string, 10) as number,
  DBRootPassword: process.env.MYSQL_ROOT_PASSWORD as string,
  Database: process.env.MYSQL_DATABASE as string,
  DBUser: process.env.MYSQL_USER as string,
  DBPassword: process.env.MYSQL_PASSWORD as string,
};
