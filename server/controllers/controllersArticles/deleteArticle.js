const { db } = require('../../db');

const deleteArticle = async (req, res) => {
  try {
    const { id } = req.query;

    const article = await db('articles')
      .select('authorId')
      .where({ id })
      .first();

    if (!article) {
      return res.status(500).json({ message: 'Не удалось найти нужную задачу' });
    }

    if (article.authorId === req.user.id) {
      await db('articles')
        .where({ id })
        .del();

      return res.sendStatus(200);
    }

    return res.status(400).json({ message: 'Вы не можете удалить эту задачу' });
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось удалить задачу' });
  }
};

module.exports = {
  deleteArticle,
};
