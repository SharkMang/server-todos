const DB = {
  client: 'pg',
  connection: 'postgres://postgres:postgres@localhost:5432/my_todo_list',
  migrations: {
    directory: './src/migrations'
  }
};

module.exports = DB;