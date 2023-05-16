const express = require('express');
const userRouter = require('./userRouter');
const articleRouter = require('./articleRouter');

const router = express.Router();

router.use('/users', userRouter);
router.use('/articles', articleRouter);

module.exports = router;
