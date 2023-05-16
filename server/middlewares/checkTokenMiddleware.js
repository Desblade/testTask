const { jwtVerify } = require('../utils/jwtVerify');
const { db } = require('../db');

const checkTokenMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    try {
      const { id } = await jwtVerify(token);

      req.user = await db('users')
        .select(['id', 'login'])
        .where({ id })
        .first();

      return next();
    } catch (e) {
      console.error(e);

      return res.status(401).json({ message: 'Не авторизован' });
    }
  }
  return res.status(401).json({ message: 'Не авторизован' });
};

module.exports = {
  checkTokenMiddleware,
};
