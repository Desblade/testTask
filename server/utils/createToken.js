const jwt = require('jsonwebtoken');

const createToken = (payload) => new Promise((resolve, reject) => {
  return jwt.sign(payload, process.env.SECRET_KEY, (errs, data) => {
    if (errs) {
      return reject(errs);
    }
    resolve(data);
  });
});

module.exports = {
  createToken,
};
