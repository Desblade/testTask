const express = require('express');
require('dotenv').config();
const router = require('./routers');

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(router);

const start = async () => {
  try {
    await app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error(`Не удалось запустить сервер: ${e}`)
  }
};

start();
