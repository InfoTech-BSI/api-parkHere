const db = require('../config/db');
const helper = require('../config/helper');
const config = require('../config/config');

async function obterUsuarios(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * FROM usuario LIMIT ?,?`, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function inserirUsuario(usuario){
  const result = await db.query(
    `INSERT INTO usuario
    (nome, nascimento, email, senha) 
    VALUES 
    (?, ?, ?, ?)`, 
    [
      usuario.Nome, usuario.Nascimento, usuario.Email, usuario.Senha
    ]
  );

  let message = 'Erro ao criar o usuário';

  if (result.affectedRows) {
    message = 'Usuário criado com sucesso!';
  }

  return {message};
}

async function atualizarUsuario(id, usuario){
  const result = await db.query(
    `UPDATE usuario 
    SET nome=?, nascimento=?, email=?, senha=? 
    WHERE id=?`, 
    [
      usuario.Nome, usuario.Nascimento, usuario.Email, usuario.Senha, id
    ]
  );

  let message = 'Erro ao atualizar o usuário';

  if (result.affectedRows) {
    message = 'Usuário atualizado com sucesso!';
  }

  return {message};
}

async function deletarUsuario(id){
  const result = await db.query(
    `DELETE FROM usuario WHERE id=?`, 
    [id]
  );

  let message = 'Erro ao deletar o usuário';

  if (result.affectedRows) {
    message = 'Usuário excluído com sucesso!';
  }

  return {message};
}

module.exports = {
  obterUsuarios,
  inserirUsuario,
  atualizarUsuario,
  deletarUsuario
}