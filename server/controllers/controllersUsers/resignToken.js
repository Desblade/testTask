const { createToken } = require('../../utils/createToken');

const resignToken = async (req, res) => {
  const { user } = req;
  const token = createToken({
    id: user.id,
    login: user.login,
  });

  return res.json({ token });
};

module.exports = {
  resignToken,
};
