const express = require('express');
const { checkTokenMiddleware } = require('../middlewares/checkTokenMiddleware');
const { createArticle } = require('../controllers/controllersArticles/createArticle');
const { getArticles } = require('../controllers/controllersArticles/getArticles');
const { updateArticle } = require('../controllers/controllersArticles/updateArticle');
const { deleteArticle } = require('../controllers/controllersArticles/deleteArticle');

const router = express.Router();

router
  .use(checkTokenMiddleware)
  .route('/')
  .post(createArticle)
  .get(getArticles)
  .patch(updateArticle)
  .delete(deleteArticle);

module.exports = router;
