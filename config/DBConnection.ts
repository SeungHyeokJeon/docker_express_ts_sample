// import config from '../config';
// import maria from 'mysql';

// const conn = maria.createConnection({
//   host: config.DBHost,
//   port: config.DBPort,
//   user: config.DBUser,
//   password: config.DBPassword,
//   database: config.Database,
// });

// module.exports = conn;

import config from '../config';
import maria from 'mysql';

const connectDB = async () => {
  try {
    maria.createConnection({
      host: config.DBHost,
      port: config.DBPort,
      user: config.DBUser,
      password: config.DBPassword,
      database: config.Database,
    });
    console.log('DB Connected');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
