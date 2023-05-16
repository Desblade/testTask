const { body } = require('express-validator');

const createArticleValidation = [
  body('title')
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 3 }),
  body('description')
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 3 }),
];

module.exports = {
  createArticleValidation,
};
