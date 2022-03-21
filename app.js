const express = require('express');
const db = require('./db/connection');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// db connection
db
  .authenticate()
  .then(() => {
    console.log("Conectou ao abnco com sucesso");
  })
  .catch(err => {
    console.log("Ocorreu um erro ao conectar");
  });


// routes jobs
app.use('/jobs', require('./routes/jobs'));

// routes
app.get('/', (req, res) => res.send('Hello World!'));