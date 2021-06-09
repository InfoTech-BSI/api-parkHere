const express = require('express');
const router = express.Router();
const ReservaService = require('../services/reservaService');

router.get('/', async function(req, res, next) {
  try {
    res.json(await ReservaService.obterReservas(req.query.page));
  } catch (err) {
    console.error(`Erro ao obter as reservas`, err.message);
    next(err);
  }
});

router.get('/usuario/:usuario', async function(req, res, next) {
  try {
    res.json(await ReservaService.dadosReservaUsuario(req.params.usuario, req.body));
  } catch (err) {
    console.error(`Erro ao obter a reserva do usuário`, err.message);
    next(err);
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await ReservaService.dadosReserva(req.params.id, req.body));
  } catch (err) {
    console.error(`Erro ao obter a reserva`, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await ReservaService.inserirReserva(req.body));
  } catch (err) {
    console.error(`Erro ao cadastrar a reserva`, err.message);
    next(err);
  }
});

router.put('/:id', async function(req, res, next) {
  try {
    res.json(await ReservaService.atualizarReserva(req.params.id, req.body));
  } catch (err) {
    console.error(`Erro ao atualizar a reserva`, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await ReservaService.deletarReserva(req.params.id));
  } catch (err) {
    console.error(`Erro ao deletar a reserva`, err.message);
    next(err);
  }
});

module.exports = router;