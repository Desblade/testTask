exports.up = (knex) => knex.table('articles').insert([
  {
    title: 'some title1',
    description: 'some description1',
    authorId: 1,
  },
  {
    title: 'some title2',
    description: 'some description2',
    authorId: 1,
  },
  {
    title: 'some title3',
    description: 'some description3',
    authorId: 1,
  },
]);

exports.down = (knex) => knex.raw('DELETE FROM articles');