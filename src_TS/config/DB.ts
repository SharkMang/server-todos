const database = process.env.DATABASE!

export default {
  client: 'pg',
  connection: database,
  migrations: {
    directory: './src_TS/migrations'
  }
};
