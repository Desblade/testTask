const { db } = require('../../db');

const getArticles = async (req, res) => {
  try {
    const articles = await db('articles as a')
      .select('a.*')
      .leftJoin('users as u', 'u.id', 'a.authorId')
      .orderBy('createdAt', 'DESC')
      .limit(20)
      .where('a.authorId', req.user.id);

    return res.json(articles);
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось получить статьи' });
  }
};

module.exports = {
  getArticles,
};
