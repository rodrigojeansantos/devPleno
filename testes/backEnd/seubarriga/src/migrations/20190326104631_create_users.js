
exports.up = (knex) => {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').primary()
    t.string('name', 128).notNull()
    t.string('mail', 128).unique().notNull()
    t.string('passwd', 128).notNull()

  })
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('users')
};
