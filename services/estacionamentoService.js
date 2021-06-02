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
