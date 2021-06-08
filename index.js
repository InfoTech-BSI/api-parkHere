const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const usuarioRouter = require('./routes/usuarioRoute');
const loginRouter = require('./routes/loginRoute');
const estacionamentoRoute = require('./routes/estacionamentoRoute');
const reservaRoute = require('./routes/reservaRoute');

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/usuario', usuarioRouter);

app.use('/login', loginRouter);

app.use('/estacionamento', estacionamentoRoute);

app.use('/reserva', reservaRoute);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});

  return;
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});