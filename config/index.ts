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
  DBHost: process.env.DB_HOST as string,
  DBPort: parseInt(process.env.DB_PORT as string, 10) as number,
  DBRootPassword: process.env.DB_HOST as string,
  Database: process.env.DB_HOST as string,
  DBUser: process.env.DB_HOST as string,
  DBPassword: process.env.DB_HOST as string,
};
