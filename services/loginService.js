const db = require('../config/db');
const helper = require('../config/helper');
const config = require('../config/config');

async function loginUsuario(usuario){
  const rows = await db.query(
    `SELECT * FROM usuario where email = ? and senha = ?`, 
    [usuario.Email, usuario.Senha]
  );
  const data = helper.emptyOrRows(rows);

  let message = 'Erro ao tentar fazer login';

  if (rows.length == 1 ) {
    message = 'Login feito com sucesso!';
  }

  return {
    data,
    message
  }
}

module.exports = {
  loginUsuario
}