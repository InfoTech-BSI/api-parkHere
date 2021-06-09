const db = require('../config/db');
const helper = require('../config/helper');
const config = require('../config/config');

async function obterReservas(page = 1) {
	const rows = await db.query(`SELECT * FROM reserva`);
	const data = helper.emptyOrRows(rows);
	const meta = { page };

	return {
		data,
		meta,
	};
}

async function dadosReserva(id, page = 1) {
	const rows = await db.query(`SELECT * FROM reserva where id = ?`,[id]);
	const data = helper.emptyOrRows(rows);
	const meta = { page };

	return {
		data,
		meta,
	};
}

async function dadosReservaUsuario(usuario, page = 1) {
	const rows = await db.query(`SELECT * FROM reserva where idUsuario = ?`,[usuario]);
	const data = helper.emptyOrRows(rows);
	const meta = { page };

	return {
		data,
		meta,
	};
}

async function inserirReserva(reserva) {
	const result = await db.query(`INSERT INTO reserva
	(idUsuario,idEstacionamento,inicioReserva,fimReserva,diaReserva,atualizacao)
	VALUES (?,?,?,?,?,?)`,[
		reserva.idUsuario, reserva.idEstacionamento, reserva.inicioReserva, reserva.fimReserva, reserva.diaReserva, reserva.atualizacao
	]);
	let message = 'Erro ao criar a reserva';

	if (result.affectedRows) {
		message = 'Reserva criada com sucesso!';
	}

	return {message};
}

async function atualizarReserva(id, reserva){
	const result = await db.query(
	  `UPDATE reserva 
	  SET idUsuario=?, idEstacionamento=?, inicioReserva=?, fimReserva=?, diaReserva=?, atualizacao=?
	  WHERE id=?`, 
	  [
        reserva.idUsuario, reserva.idEstacionamento, reserva.inicioReserva, reserva.fimReserva, reserva.diaReserva, reserva.atualizacao, id
      ]
	);
  
	let message = 'Erro ao atualizar a reserva';
  
	if (result.affectedRows) {
		message = 'reserva atualizada com sucesso!';
	}
  
	return {message};
}
  
  async function deletarReserva(id){
	const result = await db.query(
	  `DELETE FROM reserva WHERE id=?`, 
	  [id]
	);
  
	let message = 'Erro ao deletar a reserva';
  
	if (result.affectedRows) {
	  message = 'Reserva excluída com sucesso!';
	}
  
	return {message};
  }

module.exports = {
	obterReservas,
	dadosReserva,
	dadosReservaUsuario,
	inserirReserva,
	atualizarReserva,
	deletarReserva
};