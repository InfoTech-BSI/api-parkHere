const express = require('express');
const router = express.Router();
const EstacionamentoService = require('../services/estacionamentoService');

router.get('/', async function(req, res, next) {
  try {
    res.json(await EstacionamentoService.obterEstacionamentos(req.query.page));
  } catch (err) {
    console.error(`Erro ao obter os estacionamentos`, err.message);
    next(err);
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await EstacionamentoService.dadosEstacionamento(req.params.id, req.body));
  } catch (err) {
    console.error(`Erro ao obter o estacionamento`, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await EstacionamentoService.inserirEstacionamento(req.body));
  } catch (err) {
    console.error(`Erro ao cadastrar o estacionamento`, err.message);
    next(err);
  }
});

router.put('/:id', async function(req, res, next) {
  try {
    res.json(await EstacionamentoService.atualizarEstacionamento(req.params.id, req.body));
  } catch (err) {
    console.error(`Erro ao atualizar o estacionamento`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await EstacionamentoService.deletarEstacionamento(req.params.id));
  } catch (err) {
    console.error(`Erro ao deletar o estacionamento`, err.message);
    next(err);
  }
});

module.exports = router;