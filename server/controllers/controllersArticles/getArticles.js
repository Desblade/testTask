const { db } = require('../../db');

const getArticles = async (req, res) => {
  try {
    const articles = await db('articles')
      .select(['id', 'title', 'description', 'authorId'])
      .leftJoin('users', 'users.id', 'articles.authorId')
      .orderBy('createdAt', 'DESC')
      .limit(20)
      .where('articles.authorId', req.user.id);

    return res.json(articles);
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось получить статьи' });
  }
};

module.exports = {
  getArticles,
};
