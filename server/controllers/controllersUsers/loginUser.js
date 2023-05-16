const bcrypt = require('bcrypt');
const { db } = require('../../db');
const { createToken } = require('../../utils/createToken');

const loginUser = async (req, res) => {
  try {
    const { login, password } = req.body;

    const user = await db('users')
      .select(['login', 'password'])
      .where({ login })
      .first();

    if (!user) {
      return res.status(400).json({ message: 'Неверный логин или пароль' });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(400).json({ message: 'Неверный логин или пароль' });
    }

    const token = await createToken({
      id: user.id,
      login: user.login,
    });

    return res.json({ token });
  } catch (e) {
    console.error(e);

    return res.status(500).json({ message: 'Не удалось войти' });
  }
};

module.exports = {
  loginUser,
};
