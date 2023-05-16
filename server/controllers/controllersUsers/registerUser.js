const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { db } = require('../../db');
const { createToken } = require('../../utils/createToken');

const registerUser = async (req, res) => {
  try {
    const { login, password } = req.body;
    const errs = validationResult(req);

    const user = await db('users')
      .select(['login', 'password'])
      .where({ login })
      .first();

    if (!errs.isEmpty()) {
      return res.status(400).json({ message: 'Неправильно заполенены поля' });
    }

    if (user) {
      return res.status(400).json({ message: 'Данный пользователь уже существует' });
    }

    const passwordHash = await bcrypt.hash(password, 5);

    const candidate = await db('users')
      .insert({
        login,
        password: passwordHash
      })
      .returning('*');

    const token = await createToken({
      id: candidate[0].id,
      login: candidate[0].login,
    });

    return res.json({ token });
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось зарегестрироваться' });
  }
};

module.exports = {
  registerUser,
};
