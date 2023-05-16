const { validationResult } = require('express-validator');

const { db } = require('../../db');

const createArticle = async (req, res) => {
  try {
    const { title, description } = req.body;
    const errs = validationResult(req);

    if (!errs.isEmpty()) {
      return res.status(400).json({ message: 'Неправильно заполнены поля' });
    }

    const article = await db('articles')
      .insert({
        title,
        description,
        authorId: req.user.id,
      })
      .returning('*')

    return res.json(article[0]);

  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось создать статью' });
  }
};

module.exports = {
  createArticle,
};