exports.up = (knex) => knex.schema.createTable('articles', (table) => {
  table.increments('id');
  table.string('title').notNullable();
  table.string('description').notNullable();
  table.timestamp('createdAt').defaultTo(knex.fn.now());
  table.integer('authorId');
  table.foreign('authorId').references('id').inTable('users')
});

exports.down = (knex) => knex.schema.dropTable('articles');