// Update with your config settings.
import * as path from 'path';

export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'crud.db3'),
    },
    useNullAsDefault: true,
  },
};
