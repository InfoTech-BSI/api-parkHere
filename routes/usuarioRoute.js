const express = require('express');
const router = express.Router();
const usuarioService = require('../services/usuarioService');

router.get('/', async function(req, res, next) {
  try {
    res.json(await usuarioService.obterUsuarios(req.query.page));
  } catch (err) {
    console.error(`Erro ao obter os usuários`, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await usuarioService.inserirUsuario(req.body));
  } catch (err) {
    console.error(`Erro ao criar o usuário`, err.message);
    next(err);
  }
});

router.put('/:id', async function(req, res, next) {
  try {
    res.json(await usuarioService.atualizarUsuario(req.params.id, req.body));
  } catch (err) {
    console.error(`Erro ao atualizar o usuário`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await usuarioService.deletarUsuario(req.params.id));
  } catch (err) {
    console.error(`Erro ao deltar o usuário`, err.message);
    next(err);
  }
});

module.exports = router;