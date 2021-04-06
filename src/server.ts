import * as dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import * as Knex from 'knex';
import config from './knexfile';
import app from './app';

//connect db
export const connectedKnex = Knex.knex(config.development);

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err: any) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log('err', err);
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
