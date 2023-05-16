const jwt = require('jsonwebtoken');

const jwtVerify = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, process.env.SECRET_KEY, (errs, data) => {
    if (errs) {
      return reject(errs);
    }
    resolve(data);
  })
});

module.exports = {
  jwtVerify,
};
