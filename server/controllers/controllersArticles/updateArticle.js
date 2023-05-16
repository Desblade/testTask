const { db } = require('../../db');

const updateArticle = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.query;
    const userId = req.user.id;
    const update = {};

    const article = await db('articles')
      .select(['title', 'description', 'authorId'])
      .where({ id })
      .first();

    if (!article) {
      return res.status(500).json({ message: 'Не удалось обновить статью' });
    }

    if (title) {
      if (article.authorId === userId) {
        update.title = title;
      } else {
        return res.status(400).json({ message: 'Вы не можете менять это поле' })
      }
    }

    if (description) {
      if (article.authorId === userId) {
        update.description = description;
      } else {
        return res.status(400).json({ message: 'Вы не можете менять это поле' })
      }
    }

    const updatedArticle = await db('articles')
      .where({ id })
      .update(update)
      .returning(['title', 'description', 'authorId']);

    return res.json(updatedArticle[0]);

  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось обновить статью' });
  }
};

module.exports = {
  updateArticle,
};
