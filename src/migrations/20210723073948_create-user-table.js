
exports.up = function(knex) {
  knex.schema.createTable('users', function() {
    table
      .autoincrements('id')
      .string('name')
      .string('email')
      .string('password')
  })
};

// exports.up = function(knex) {
//   knex.schema.createTable('todos', function() {
//     table
//       .autoincrements('id')
//       .string('nameTodos')
//       .string('isChecked')
//       .string('aditing')
//   })
// };



exports.down = function(knex) {
  return knex.schema.dropTable("users")
};
