/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments('id');
  table.string('login').notNullable().unique();
  table.string('password').notNullable();
});

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = (knex) => knex.schema.dropTable('users');