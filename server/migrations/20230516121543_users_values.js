const bcrypt = require('bcrypt');

exports.up = async (knex) => knex.table('users').insert([
  {
    login: 'asdasdasd',
    password: await bcrypt.hash('asddsadsadas', 5),
  },
  {
    login: 'dasdas212dasds',
    password: await bcrypt.hash('sdaasdasd', 5),
  },
  {
    login: 'dasdsgsda21',
    password: await bcrypt.hash('dasdasdasd', 5),
  },
]);

exports.down = (knex) => knex.raw('DELETE FROM users');