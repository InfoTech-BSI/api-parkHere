const db = require('../config/db');
const helper = require('../config/helper');
const config = require('../config/config');

async function obterEstacionamentos(page = 1) {
	const rows = await db.query(`SELECT * FROM estacionamento`);
	const data = helper.emptyOrRows(rows);
	const meta = { page };

	return {
		data,
		meta,
	};
}

async function dadosEstacionamento(id, page = 1) {
	const rows = await db.query(`SELECT * FROM estacionamento where id = ?`,[id]);
	const data = helper.emptyOrRows(rows);
	const meta = { page };

	return {
		data,
		meta,
	};
}

module.exports = {
	obterEstacionamentos,
	dadosEstacionamento,
};

async function inserirEstacionamento(estacionamento) {
	const result = await db.query(`INSERT INTO estacionamento
	(nome,telefone,whatsapp,dias_funciona,horas_funciona,endereco,imagem)
	VALUES (?,?,?,?,?,?,?)`,[
		estacionamento.nome, estacionamento.telefone, estacionamento.whatsapp, estacionamento.dias_funciona, estacionamento.horas_funciona, estacionamento.endereco, estacionamento.imagem
	]);
	let message = 'Erro ao criar o estacionamento';

	if (result.affectedRows) {
		message = 'Estacionamento criado com sucesso!';
	}

	return {message};
}

async function atualizarEstacionamento(id, estacionamento){
	const result = await db.query(
	  `UPDATE estacionamento 
	  SET nome=?, telefone=?, whatsapp=?, dias_funciona=?, horas_funciona=?, endereco=?, imagem=?
	  WHERE id=?`, 
	  [
		estacionamento.nome, estacionamento.telefone, estacionamento.whatsapp, estacionamento.dias_funciona, estacionamento.horas_funciona, estacionamento.endereco, estacionamento.imagem, id
	  ]
	);
  
	let message = 'Erro ao atualizar o estacionamento';
  
	if (result.affectedRows) {
		message = 'estacionamento atualizado com sucesso!';
	}
  
	return {message};
}
  
  async function deletarEstacionamento(id){
	const result = await db.query(
	  `DELETE FROM estacionamento WHERE id=?`, 
	  [id]
	);
  
	let message = 'Erro ao deletar o estacionamento';
  
	if (result.affectedRows) {
	  message = 'estacionamento excluído com sucesso!';
	}
  
	return {message};
  }

module.exports = {
	obterEstacionamentos,
	dadosEstacionamento,
	inserirEstacionamento,
	atualizarEstacionamento,
	deletarEstacionamento
};