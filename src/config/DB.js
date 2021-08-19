const database = process.env.DATABASE

const DB = {
  client: 'pg',
  connection: database,
  migrations: {
    directory: './src/migrations'
  }
};

module.exports = DB;