const express = require('express');
const { registerValidation } = require('../validations/userValidation');
const { registerUser } = require('../controllers/controllersUsers/registerUser');
const { loginUser } = require('../controllers/controllersUsers/loginUser');
const { checkTokenMiddleware } = require('../middlewares/checkTokenMiddleware');
const { resignToken } = require('../controllers/controllersUsers/resignToken');

const router = express.Router();

router
  .post('/register', registerValidation, registerUser)
  .post('/login', loginUser)
  .get('/checkToken', checkTokenMiddleware, resignToken);

module.exports = router;
