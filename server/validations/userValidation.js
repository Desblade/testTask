const { body } = require('express-validator');

const registerValidation = [
  body('login')
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 5 }),
  body('password')
    .exists({ checkFalsy: true })
    .isString()
    .isLength({ min: 5 }),
];

module.exports = {
  registerValidation,
};
