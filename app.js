const express = require('express');
const db = require('./db/connection');

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));


// db connection
db
  .authenticate()
  .then(() => {
    console.log("Conectou ao abnco com sucesso");
  })
  .catch(err => {
    console.log("Ocorreu um erro ao conectar");
  });


// routes
app.get('/', (req, res) => res.send('Hello World!'));