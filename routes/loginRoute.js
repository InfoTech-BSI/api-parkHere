const express = require('express');
const router = express.Router();
const loginService = require('../services/loginService');

router.post('/', async function(req, res, next) {
  try {
    res.json(await loginService.loginUsuario(req.body));
  } catch (err) {
    console.error(`Erro ao tentar acessar`, err.message);
    next(err);
  }
});

module.exports = router;